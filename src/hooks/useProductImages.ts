import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useProductImages = (productId: string | number) => {
  return useQuery({
    queryKey: ["product-images", productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("product_images")
        .select("*")
        .eq("product_id", String(productId))
        .order("position");

      if (error) throw error;
      return data;
    },
    enabled: !!productId,
  });
};
