export interface Channel {
  id: string;
  name: string;
  url: string;
  logo: string;
  category: string;
  description?: string;
  icon: string;
  isFavorite?: boolean;
}

export interface ChannelCategory {
  id: string;
  name: string;
  channels: Channel[];
}