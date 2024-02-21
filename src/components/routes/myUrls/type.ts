export interface TableRowProps {
  _id: string;
  createdAt: string;
  originalUrl: string;
  slicedOriginalUrl: string;
  shortUrl?: string;
  customUrl?: string;
  handleDropdown: () => void;
}
