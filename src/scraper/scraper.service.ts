import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ScraperResponseDto } from './dto/scraper-response.dto';
import * as cheerio from 'cheerio';
import { WebsiteData } from './interface/website-data.interface';
import { ShowtimeService } from '../showtime/showtime.service';

@Injectable()
export class ScraperService {
  private readonly logger = new Logger(ScraperService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly showtimeService: ShowtimeService,
  ) {}

  private async fetchHtml(ur: string): Promise<string> {
    const { data } = await firstValueFrom(
      this.httpService.get<string>(ur).pipe(
        catchError((error: AxiosError) => {
          const msg = error?.response?.data || error?.response || error;
          this.logger.error(msg);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  private parseHtml(html: string): WebsiteData {
    const $ = cheerio.load(html);
    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') ?? '';
    const faviconUrl = $('link[rel="shortcut icon"]').attr('href') ?? '';

    const scriptUrls: string[] = [];
    $('script').each((_i, el) => {
      const src = $(el).attr('src');
      if (src) {
        scriptUrls.push(src);
      }
    });

    const stylesheetUrls: string[] = [];
    $('link[rel="stylesheet"]').each((_i, el) => {
      const href = $(el).attr('href');
      if (href) {
        stylesheetUrls.push(href);
      }
    });

    const imageUrls: string[] = [];
    $('img').each((_i, el) => {
      const src = $(el).attr('src');
      if (src) {
        imageUrls.push(src);
      }
    });

    const showtimes: ShowtimeInterface[] = [
      //Sample data
      {
        showtimeId: '0009-170678',
        cinemaName: 'Al Hamra Mall - Ras Al Khaimah',
        movieTitle: 'Taylor Swift: The Eras Tour',
        showtimeInUTC: '2023-11-03T17:30:00Z',
        bookingLink: 'https://uae.voxcinemas.com/booking/0009-170678',
        attributes: ['Standard'],
      },
    ];

    /*
    TODO: Implement showtime scraping functionality. Specific requirements are as follows:
     - Navigate to the VOX Cinemas showtime listing at 'https://uae.voxcinemas.com/showtimes'
     - Choose a random cinema location. For consistency in testing, you might prefer selecting 'Al Hamra Mall - Ras Al Khaimah' or any other location of choice from 'https://voxcinemas.com'.
     - Scrape showtime data for the selected cinema for the date '2023-11-03' or any other date. The expected URL format is 'https://uae.voxcinemas.com/showtimes?c=al-hamra-mall-ras-al-khaimah&d=20231103'.
     - The scraped data should include showtimeId, cinemaName, movieTitle, showtimeInUTC, bookingLink, and attributes. Populate the 'showtimes' array with this data.
     - Ensure that the scraping logic is robust, handling potential inconsistencies in the webpage structure and providing informative error messages if scraping fails.
     - Consider efficiency and performance in your implementation, avoiding unnecessary requests or data processing operations.
     */

    return {
      title,
      metaDescription,
      faviconUrl,
      scriptUrls,
      stylesheetUrls,
      imageUrls,
      showtimes,
    };
  }

  async scrape(url: string): Promise<ScraperResponseDto> {
    const html = await this.fetchHtml(url);
    const websiteData: WebsiteData = this.parseHtml(html);
    await this.showtimeService.addShowtimes(websiteData.showtimes);
    return {
      requestUrl: url,
      responseData: websiteData,
    };
  }
}
