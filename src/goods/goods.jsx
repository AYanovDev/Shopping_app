import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./product-card";

export default function Goods() {
  const { goodsId } = useParams();
  const { data, error, loading } = useCategoryData(goodsId);

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
