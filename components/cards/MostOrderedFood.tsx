import Card from "../ui/Card";

const foods = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000", img: "🥗" },
  { name: "Chicken Noodles", price: "IDR 75.000", img: "🍜" },
  { name: "Smoothie Fruits", price: "IDR 45.000", img: "🥤" },
  { name: "Hot Chicken Wings", price: "IDR 45.000", img: "🍗" },
];

export default function MostOrderedFood() {
  return (
    <Card>
      <h3 className="font-semibold mb-4">Most Ordered Food</h3>

      <div className="space-y-4">
        {foods.map((food) => (
          <div key={food.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xl">
                {food.img}
              </div>
              <p className="text-sm font-medium">{food.name}</p>
            </div>
            <p className="text-sm text-gray-500">{food.price}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
