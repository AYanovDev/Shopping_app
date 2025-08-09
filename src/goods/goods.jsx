import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./product-card";

export default function Goods() {
  const { goodsId } = useParams();
  const { data, error, loading } = useCategoryData(goodsId);

  function renderCards() {
    if (loading) {
      return null;
    }
    if (error) {
      return <p>Server Error!</p>;
    }
    return data.products.map((e) => {
      return <ProductCard product={e} key={e.id} />;
    });
  }
  return (
    <div className="flex flex-wrap place-items-center gap-8 place-content-around p-24">
      {renderCards()}
    </div>
  );
}

function useCategoryData(goodsId) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products/category?type=${goodsId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [goodsId]);

  return { data, error, loading };
}
