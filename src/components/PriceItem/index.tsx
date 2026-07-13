import { useStore } from "@/store";

import "./PriceItem.scss"

interface PriceItemProps {
  item: {
    price: string;
    title_ru?: string;
    title_en?: string;
    text_ru?: string;
    text_en?: string;
  };
}

const PriceItem = ({ item }: PriceItemProps) => {
  const { globalUIStore } = useStore();
  return (
    <div className="price__wrapper">
      <h3 className="price__title">
        {item[`title_${globalUIStore.currentLocale}`]}
      </h3>
      <p className="price__text">
        {item[`text_${globalUIStore.currentLocale}`]}
      </p>
      <p className="price__value">{item.price}</p>
    </div>
  );
};

export default PriceItem;
