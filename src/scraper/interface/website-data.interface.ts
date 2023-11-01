export interface WebsiteData {
  title: string;
  metaDescription: string;
  faviconUrl: string;
  scriptUrls: string[];
  stylesheetUrls: string[];
  imageUrls: string[];
  showtimes: ShowtimeInterface[];
}
