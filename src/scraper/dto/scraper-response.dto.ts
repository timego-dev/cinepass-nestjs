import { WebsiteData } from '../interface/website-data.interface';

export class ScraperResponseDto {
  // TODO: As part of this task, you are required to enhance the Swagger documentation for the 'ScraperResponseDto' class.
  //  1. Apply appropriate Swagger decorators to the 'requestUrl' and 'responseData' fields. Make sure to include the 'description' and 'example' fields in the decorators, providing clear and accurate information.
  //  2. The 'responseData' field contains data of type 'WebsiteData'. You need to ensure that the structure and content of this type are well-documented in Swagger. Consider the best approach to document the nested fields and types within 'WebsiteData'.
  //  3. Review the overall Swagger setup for this DTO. Consider if there are any additional details or specific aspects of the data that API consumers would need to know. Your goal is to make the API's response structure and data as clear as possible for anyone reviewing the generated Swagger documentation.
  //  Please ensure your documentation is comprehensive and follows any standard best practices for API documentation.

  requestUrl: string;
  responseData: WebsiteData;
}
