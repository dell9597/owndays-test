export interface ProductsResponse {
  success: boolean;
  message: string;
  total: number;
  not_found: string[];
  data: ProductItem[];
}

export interface ProductItem {
  product: Product;
  product_line: ProductLine;
  product_type: ProductType;
  localization: Localization;
  nose_pad_type: NosePadType;
  frame_types: FrameType[];
  materials: Material[];
  tags: Tag[];
  selling_setting: SellingSetting;
  skus: ProductSku[];
}

export interface Product {
  id: number;
  code: string;
  name: string | null;
  model_name: string;
  lens_width: string;
  lens_height: string;
  bridge_width: string;
  temple_depth: string;
  frame_weight: string;
  is_made_in_japan: boolean;
  is_free: boolean;
  size_frame: string;
  size_range: string;
}

export interface ProductLine {
  id: number;
  name: string;
  slug: string;
}

export interface ProductType {
  id: number;
  name: string;
}

export interface Localization {
  id: number;
  language_code: string;
  name: string | null;
  description: string;
}

export interface NosePadType {
  id: number;
  name: string;
}

export interface FrameType {
  id: number;
  code: string;
}

export interface Material {
  id: number;
  name: string | null;
}

export interface Tag {
  id: number;
  name: string;
  icon?: string | null;
}

export interface SellingSetting {
  id: number;
  country_code: string;
  price: number;
  raw_price: number;
  code: string | null;
  is_published: boolean;
  status: number;
  in_stock: number;
}

export interface ProductSku {
  id: number;
  code: string;
  jan_code: string;
  try_on_code: string;
  order: number;
  size: string | null;
  is_default_display: number; 
  is_online_exclusive: boolean;
  colors: ProductColor[];
  images: ProductImage[];
  sizes: any[];
}

export interface ProductColor {
  id: number;
  code: string;
  name: string;
  path: string | null;
  hex_code: string | null;
  localizations: ColorLocalization[];
}

export interface ColorLocalization {
  language_code: string;
  name: string;
}

export interface ProductImage { 
  path: string;
  path_webp: string | null;
  order: number;
}

export interface ProductSize {
  id?: number;
  name?: string;
}