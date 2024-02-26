export interface TableRowProps {
  _id: string;
  createdAt: string;
  originalUrl: string;
  slicedOriginalUrl: string;
  shortUrl?: string;
  short: string;
  customUrl?: string;
  handleDropdown: () => void;
  handleGenCodeClick: () => void;
  handleDeleteClick: () => void;
}
