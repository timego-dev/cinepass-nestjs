import { ApiProperty } from "@nestjs/swagger";

class ShowtimeDto {
  @ApiProperty({
    description: 'The ID of the showtime',
  })
  showtimeId: string;

  @ApiProperty({
    description: 'The name of the cinema',
  })
  cinemaName: string;

  @ApiProperty({
    description: 'The title of the movie',
  })
  movieTitle: string;

  @ApiProperty({
    description: 'The showtime in UTC format',
  })
  showtimeInUTC: string;

  @ApiProperty({
    description: 'The booking link for the showtime',
  })
  bookingLink: string;

  @ApiProperty({
    description: 'An array of additional attributes or details about the showtime',
    type: [String],
  })
  attributes: string[];

  @ApiProperty({
    description: 'The name of city',
  })
  city?: string;
}

class WebsiteDataDto {
  @ApiProperty({
    description: 'The title of the website',
  })
  title: string;

  @ApiProperty({
    description: 'The meta description of the website',
  })
  metaDescription: string;

  @ApiProperty({
    description: 'The URL of the website favicon',
  })
  faviconUrl: string;

  @ApiProperty({
    description: 'An array of URLs for the scripts used on the website',
    type: [String],
  })
  scriptUrls: string[];

  @ApiProperty({
    description: 'An array of URLs for the stylesheets used on the website',
    type: [String],
  })
  stylesheetUrls: string[];

  @ApiProperty({
    description: 'An array of URLs for the images used on the website',
    type: [String],
  })
  imageUrls: string[];

  @ApiProperty({
    description: 'An array of showtimes for events on the website',
    type: [ShowtimeDto],
  })
  showtimes: ShowtimeDto[];
}

export class ScraperResponseDto {
  // DONE: As part of this task, you are required to enhance the Swagger documentation for the 'ScraperResponseDto' class.
  //  1. Apply appropriate Swagger decorators to the 'requestUrl' and 'responseData' fields. Make sure to include the 'description' and 'example' fields in the decorators, providing clear and accurate information.
  //  2. The 'responseData' field contains data of type 'WebsiteData'. You need to ensure that the structure and content of this type are well-documented in Swagger. Consider the best approach to document the nested fields and types within 'WebsiteData'.
  //  3. Review the overall Swagger setup for this DTO. Consider if there are any additional details or specific aspects of the data that API consumers would need to know. Your goal is to make the API's response structure and data as clear as possible for anyone reviewing the generated Swagger documentation.
  //  Please ensure your documentation is comprehensive and follows any standard best practices for API documentation.
  @ApiProperty({
    description: 'The URL that was requested by the scraper',
  })
  requestUrl: string;

  @ApiProperty({ type: WebsiteDataDto })
  responseData: WebsiteDataDto;
}

export class ScraperErrorResponseDto {
  @ApiProperty({
    description: 'The error message',
  })
  message: string;
}
