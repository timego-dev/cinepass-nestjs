import { ApiProperty } from '@nestjs/swagger';

export class ScraperRequestDto {
  @ApiProperty({
    description: 'Website Url',
    required: true,
    example: 'https://www.cinemaplus.az/az/cinema/about-cinemaplus/28-mall/',
  })
  //TODO: Implement validation for the 'url' field to ensure it contains a valid URL format.
  // Ensure to handle edge cases, such as trailing slash consistency, allowed protocols (http, https)
  url: string;
}
