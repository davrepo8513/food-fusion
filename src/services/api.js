import axios from 'axios';

// Using TheMealDB API for food data
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Mock food data for better e-commerce experience
const mockFoodData = [
  {
    id: 1,
    title: "Margherita Pizza",
    price: 899,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
    category: "pizza",
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
    rating: 4.5,
    cookTime: "15-20 min"
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    price: 1099,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: "pizza",
    description: "Delicious pizza topped with pepperoni and cheese",
    rating: 4.7,
    cookTime: "15-20 min"
  },
  {
    id: 3,
    title: "Classic Burger",
    price: 699,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    rating: 4.3,
    cookTime: "10-15 min"
  },
  {
    id: 4,
    title: "Cheeseburger",
    price: 799,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    category: "burger",
    description: "Classic burger with melted cheese and fresh vegetables",
    rating: 4.6,
    cookTime: "10-15 min"
  },
  {
    id: 5,
    title: "Chocolate Cake",
    price: 499,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    category: "dessert",
    description: "Rich and moist chocolate cake with chocolate frosting",
    rating: 4.8,
    cookTime: "Ready to serve"
  },
  {
    id: 6,
    title: "Cheesecake",
    price: 549,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    category: "dessert",
    description: "Creamy New York style cheesecake with berry topping",
    rating: 4.9,
    cookTime: "Ready to serve"
  },
  {
    id: 7,
    title: "Fresh Orange Juice",
    price: 299,
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
    category: "drink",
    description: "Freshly squeezed orange juice, rich in vitamin C",
    rating: 4.4,
    cookTime: "Ready to serve"
  },
  {
    id: 8,
    title: "Iced Coffee",
    price: 349,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
    category: "drink",
    description: "Cold brew coffee with ice and your choice of milk",
    rating: 4.2,
    cookTime: "Ready to serve"
  },
  {
    id: 9,
    title: "Veggie Pizza",
    price: 949,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    category: "pizza",
    description: "Fresh vegetables on a crispy crust with mozzarella",
    rating: 4.4,
    cookTime: "15-20 min"
  },
  {
    id: 10,
    title: "BBQ Burger",
    price: 949,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
    category: "burger",
    description: "Smoky BBQ burger with onion rings and BBQ sauce",
    rating: 4.5,
    cookTime: "12-18 min"
  },
  {
    id: 11,
    title: "Tiramisu",
    price: 599,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: "dessert",
    description: "Classic Italian dessert with coffee and mascarpone",
    rating: 4.7,
    cookTime: "Ready to serve"
  },
  {
    id: 12,
    title: "Smoothie Bowl",
    price: 699,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
    category: "drink",
    description: "Healthy smoothie bowl with fresh fruits and granola",
    rating: 4.6,
    cookTime: "Ready to serve"
  }
];

// API functions
export const fetchProducts = async () => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockFoodData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (category === 'all') {
      return mockFoodData;
    }
    
    return mockFoodData.filter(item => 
      item.category.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const product = mockFoodData.find(item => item.id === parseInt(id));
    if (!product) {
      throw new Error('Product not found');
    }
    
    return product;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

// Alternative: Real API integration with TheMealDB (commented out for now)
/*
export const fetchMealsFromAPI = async () => {
  try {
    const response = await api.get('/search.php?s=');
    return response.data.meals || [];
  } catch (error) {
    console.error('Error fetching meals from API:', error);
    throw error;
  }
};

export const fetchMealsByCategory = async (category) => {
  try {
    const response = await api.get(`/filter.php?c=${category}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error fetching meals by category:', error);
    throw error;
  }
};
*/

export default api;