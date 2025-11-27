"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Clock, Users, ChefHat, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Dish {
  id: string
  name: string
  description: string
  image: string
  prepTime: string
  cookTime: string
  servings: string
  cuisine: string
  course: string
  ingredients: string[]
  steps: string[]
  chefNotes: string[]
  category: string
  difficulty: string
  instructions: string[]
  chefTip?: string
}

const dishes: Dish[] = [
  {
    id: "bhatwani",
    name: "Bhatwani",
    description:
      "Roasted Black Soybean Stew - A traditional Uttarakhand dish lovingly crafted with nutritious black soybeans, passed down through generations of Pahari heritage.",
    image: "/bhatwani-stew.png",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    servings: "4-6 people",
    cuisine: "Himalayan",
    course: "Main Course",
    ingredients: [
      "2 cups Black Soybeans",
      "3 cups Water",
      "1/2 cup Cooking Oil (Mustard Oil preferred)",
      "4-5 Garlic Cloves",
      "1 teaspoon Cumin Seeds",
      "1/4 teaspoon Turmeric Powder",
      "1/2 teaspoon Ground Coriander Powder",
      "1/2 teaspoon Red Chili Powder",
      "Salt to taste",
      "1/2 teaspoon Garam Masala Powder",
      "Fresh Green Coriander Leaves for garnish",
    ],
    steps: [
      "Heat a kadhai and roast Black Soybeans without oil for 3-5 minutes until aromatic.",
      "Let the roasted soybeans cool down completely.",
      "Grind the cooled soybeans into a coarse powder.",
      "Heat oil in the kadhai and fry cumin seeds, garlic, and ground soybean powder.",
      "Add turmeric, coriander, red chili powder, salt, and water. Mix well.",
      "Boil and then simmer for 20-30 minutes or until soybeans are soft.",
      "Sprinkle garam masala before serving.",
      "Serve hot with steaming rice and garnish with ghee, green coriander leaves.",
    ],
    chefNotes: [
      "Cooking in a Kadhai gives Bhatwani its unique flavor and color.",
      "Letting the soybeans cool before grinding prevents stickiness.",
      "Use a coarse grind for texture and simmer patiently for rich flavor.",
    ],
    category: "Himalayan",
    difficulty: "medium",
    instructions: [
      "Heat a kadhai and roast Black Soybeans without oil for 3-5 minutes until aromatic.",
      "Let the roasted soybeans cool down completely.",
      "Grind the cooled soybeans into a coarse powder.",
      "Heat oil in the kadhai and fry cumin seeds, garlic, and ground soybean powder.",
      "Add turmeric, coriander, red chili powder, salt, and water. Mix well.",
      "Boil and then simmer for 20-30 minutes or until soybeans are soft.",
      "Sprinkle garam masala before serving.",
      "Serve hot with steaming rice and garnish with ghee, green coriander leaves.",
    ],
    chefTip: "Cooking in a Kadhai gives Bhatwani its unique flavor and color.",
  },
  {
    id: "gahat-ki-daal",
    name: "Gahat Ki Daal",
    description:
      "Horse Gram Stew - A hearty and nutritious dal from Uttarakhand's Himalayan region. Known for its earthy flavor and strength-giving properties.",
    image: "/mooli-aloo-thechwani.png",
    prepTime: "8 hours (soaking)",
    cookTime: "35 minutes",
    servings: "4-6 people",
    cuisine: "Himalayan",
    course: "Main Course",
    ingredients: [
      "1 cup horse gram (gahat)",
      "3 cups water",
      "2 tablespoons oil",
      "1 teaspoon cumin seeds",
      "4 garlic cloves, finely chopped",
      "1 inch ginger, finely chopped",
      "1 medium onion, chopped",
      "1/4 teaspoon turmeric powder",
      "1/2 teaspoon red chili powder",
      "1/2 teaspoon coriander powder",
      "Salt to taste",
      "2 tablespoons chopped coriander",
      "1 tablespoon ghee (optional)",
    ],
    steps: [
      "Soak horse gram overnight or for at least 8 hours.",
      "Drain and pressure cook the soaked gahat with 3 cups water, turmeric powder, red chili powder, coriander powder, and salt for 3-4 whistles until soft and mushy.",
      "Heat oil or ghee in a pan. Add cumin seeds and let them crackle.",
      "Add garlic, ginger, and onion. Sauté until onion turns golden brown.",
      "Add cooked gahat along with its water to the pan. Mix well and bring to boil.",
      "Simmer on low flame for 10-15 minutes to blend flavors.",
      "Garnish with chopped coriander leaves.",
      "Serve hot with rice or roti.",
    ],
    chefNotes: [
      "Horse gram is packed with protein and iron - perfect for mountain weather.",
      "The longer you simmer, the more the flavors develop.",
      "Add a squeeze of lemon before serving for extra tang.",
    ],
    category: "Himalayan",
    difficulty: "medium",
    instructions: [
      "Soak horse gram overnight or for at least 8 hours.",
      "Drain and pressure cook the soaked gahat with 3 cups water, turmeric powder, red chili powder, coriander powder, and salt for 3-4 whistles until soft and mushy.",
      "Heat oil or ghee in a pan. Add cumin seeds and let them crackle.",
      "Add garlic, ginger, and onion. Sauté until onion turns golden brown.",
      "Add cooked gahat along with its water to the pan. Mix well and bring to boil.",
      "Simmer on low flame for 10-15 minutes to blend flavors.",
      "Garnish with chopped coriander leaves.",
      "Serve hot with rice or roti.",
    ],
    chefTip: "Horse gram is packed with protein and iron - perfect for mountain weather.",
  },
  {
    id: "kaapuli",
    name: "Kaapuli",
    description:
      "Green Leafy Vegetable Curry - A thick, hearty curry made from spinach and local greens, cherished in the Himalayas. Nourishing and full of fresh flavors.",
    image: "/kaapuli-curry.png",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: "4 people",
    cuisine: "Himalayan",
    course: "Main Course",
    ingredients: [
      "2 bunches fresh spinach (palak)",
      "1/2 bunch fenugreek leaves (methi, optional)",
      "4-5 garlic cloves, minced",
      "1 teaspoon cumin seeds",
      "1 pinch asafoetida (hing)",
      "1 teaspoon coriander powder",
      "1/2 teaspoon turmeric powder",
      "2 tablespoons mustard oil",
      "1 teaspoon gram flour (besan)",
      "2 tablespoons curd (optional)",
      "4-5 green chilies whole",
      "Salt to taste",
      "1 teaspoon ghee for garnish",
    ],
    steps: [
      "Wash spinach, fenugreek leaves, and green chilies thoroughly. Boil together with 1-2 cups water until tender.",
      "Blend the boiled greens into a smooth paste.",
      "Heat mustard oil in a pan. Add garlic and cumin seeds; sauté till fragrant. Add asafoetida.",
      "Add the green paste, turmeric powder, coriander powder, and salt. Mix well.",
      "Dissolve gram flour in curd and add to the pan. Add some water if the mixture is too thick.",
      "Cook on slow flame for 8-10 minutes, stirring occasionally.",
      "Garnish with a spoonful of ghee.",
      "Serve hot with roti or steamed rice.",
    ],
    chefNotes: [
      "The mustard oil gives this curry its distinctive Himalayan flavor.",
      "Don't skip the tempering - it makes all the difference.",
      "This dish is naturally vegan if you omit the curd and use oil instead of ghee.",
    ],
    category: "Himalayan",
    difficulty: "medium",
    instructions: [
      "Wash spinach, fenugreek leaves, and green chilies thoroughly. Boil together with 1-2 cups water until tender.",
      "Blend the boiled greens into a smooth paste.",
      "Heat mustard oil in a pan. Add garlic and cumin seeds; sauté till fragrant. Add asafoetida.",
      "Add the green paste, turmeric powder, coriander powder, and salt. Mix well.",
      "Dissolve gram flour in curd and add to the pan. Add some water if the mixture is too thick.",
      "Cook on slow flame for 8-10 minutes, stirring occasionally.",
      "Garnish with a spoonful of ghee.",
      "Serve hot with roti or steamed rice.",
    ],
    chefTip: "The mustard oil gives this curry its distinctive Himalayan flavor.",
  },
  {
    id: "kandali-ki-bhuji",
    name: "Kandali Ki Bhujji",
    description:
      "Stinging Nettle Stir Fry - This nutritious Himalayan dish made from wild nettle leaves is rich in minerals. A seasonal favorite in Uttarakhand.",
    image: "/kandali-ki-bhuji.png",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: "4 people",
    cuisine: "Himalayan",
    course: "Side Dish",
    ingredients: [
      "2 kg tender nettle leaves (Sisunak or Kandali)",
      "50 g jakhiya (wild mustard seeds)",
      "30 ml cooking oil",
      "Salt to taste",
      "1 medium tomato, chopped (for garnish)",
      "1 tablespoon butter",
    ],
    steps: [
      "Boil nettle leaves in water until soft and pulpy. Drain and wash the pulp three times to remove bitterness.",
      "Grind the cleaned pulp to a smooth paste.",
      "Heat oil in a thick-bottomed pan; add jakhiya and let it sizzle.",
      "Add nettle paste and salt; fry well, stirring regularly till cooked through.",
      "Garnish with chopped tomato and butter just before serving.",
      "Serve hot with boiled rice.",
    ],
    chefNotes: [
      "Handle raw nettle with gloves - cooking removes the sting.",
      "Washing three times is essential to remove any bitterness.",
      "Rich in iron, calcium, and vitamins - a true superfood from the mountains.",
    ],
    category: "Himalayan",
    difficulty: "medium",
    instructions: [
      "Boil nettle leaves in water until soft and pulpy. Drain and wash the pulp three times to remove bitterness.",
      "Grind the cleaned pulp to a smooth paste.",
      "Heat oil in a thick-bottomed pan; add jakhiya and let it sizzle.",
      "Add nettle paste and salt; fry well, stirring regularly till cooked through.",
      "Garnish with chopped tomato and butter just before serving.",
      "Serve hot with boiled rice.",
    ],
    chefTip: "Handle raw nettle with gloves - cooking removes the sting.",
  },
  {
    id: "mooli-aloo-thechwani",
    name: "Mooli Aur Aloo Ki Thechwani",
    description:
      "Crushed Radish and Potato Curry - A classic rustic Himalayan curry made by crushing radish and potatoes instead of chopping for special texture.",
    image: "/gahat-ki-daal.png",
    prepTime: "15 minutes",
    cookTime: "35 minutes",
    servings: "4-6 people",
    cuisine: "Himalayan",
    course: "Main Course",
    ingredients: [
      "3-4 medium radishes",
      "1 large potato",
      "4-5 garlic cloves",
      "3 cm ginger piece",
      "1 medium onion, chopped",
      "1 medium tomato, chopped",
      "1 teaspoon cumin seeds",
      "4-5 whole red chilies",
      "A pinch of asafoetida (hing)",
      "1/2 teaspoon turmeric powder",
      "1/2 teaspoon coriander powder",
      "1/2 teaspoon red chili powder",
      "2 teaspoons oil or ghee",
      "Salt to taste",
      "6 cups water (approximate)",
    ],
    steps: [
      "Peel and crush radish and potato roughly into small pieces (do not finely chop).",
      "Crush garlic and ginger finely.",
      "Heat oil or ghee in a pan over medium heat. Add garlic and ginger, sauté until fragrant.",
      "Add crushed vegetables, sauté for 2-3 minutes.",
      "Add cumin seeds, red chilies, asafoetida; stir well.",
      "Add chopped onion and tomato; cook until onions turn brown.",
      "Add turmeric powder, coriander powder, red chili powder; fry for a few seconds.",
      "Pour in 6 cups of water, bring to boil. Reduce flame and simmer covered for 20-30 minutes, adding water if needed, until vegetables are tender.",
      "Garnish with fresh coriander leaves.",
      "Serve hot with rice or roti.",
    ],
    chefNotes: [
      "The crushing technique (thechwani) is traditional and gives unique texture.",
      "This is a soupy curry - adjust water to your preference.",
      "Radish becomes sweet and tender when cooked slowly.",
    ],
    category: "Himalayan",
    difficulty: "medium",
    instructions: [
      "Peel and crush radish and potato roughly into small pieces (do not finely chop).",
      "Crush garlic and ginger finely.",
      "Heat oil or ghee in a pan over medium heat. Add garlic and ginger, sauté until fragrant.",
      "Add crushed vegetables, sauté for 2-3 minutes.",
      "Add cumin seeds, red chilies, asafoetida; stir well.",
      "Add chopped onion and tomato; cook until onions turn brown.",
      "Add turmeric powder, coriander powder, red chili powder; fry for a few seconds.",
      "Pour in 6 cups of water, bring to boil. Reduce flame and simmer covered for 20-30 minutes, adding water if needed, until vegetables are tender.",
      "Garnish with fresh coriander leaves.",
      "Serve hot with rice or roti.",
    ],
    chefTip: "The crushing technique (thechwani) is traditional and gives unique texture.",
  },
  {
    id: "mandua-ki-roti",
    name: "Mandua Ki Roti",
    description:
      "Finger Millet Flatbread - Mandua roti provides essential nutrients and energy to mountain dwellers. A daily bread in the Himalayas.",
    image: "/mandua-ki-roti.png",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: "4-6 people",
    cuisine: "Himalayan",
    course: "Bread",
    ingredients: [
      "600 g mandua (finger millet) flour",
      "200 g wheat flour",
      "Water as needed",
      "Salt to taste (optional)",
    ],
    steps: [
      "Mix mandua flour, wheat flour, and salt.",
      "Add water little by little and knead to form a soft dough.",
      "Divide the dough into small balls.",
      "Roll each ball into a thin round roti.",
      "Cook both sides on a hot pan (tawa) until golden spots appear.",
      "Serve warm with ghee, dal, or vegetable curry.",
    ],
    chefNotes: [
      "Mandua flour is gluten-free and highly nutritious - rich in calcium and iron.",
      "Mix with wheat flour for easier rolling, or use 100% mandua for traditional style.",
      "Best enjoyed fresh and hot with a dollop of ghee.",
    ],
    category: "Himalayan",
    difficulty: "easy",
    instructions: [
      "Mix mandua flour, wheat flour, and salt.",
      "Add water little by little and knead to form a soft dough.",
      "Divide the dough into small balls.",
      "Roll each ball into a thin round roti.",
      "Cook both sides on a hot pan (tawa) until golden spots appear.",
      "Serve warm with ghee, dal, or vegetable curry.",
    ],
    chefTip: "Mix with wheat flour for easier rolling, or use 100% mandua for traditional style.",
  },
  {
    id: "barnyard-millet-kheer",
    name: "Barnyard Millet Ki Kheer",
    description:
      "Sweet Barnyard Millet Pudding - A rich and creamy dessert traditionally prepared in Himalayan homes during festivities.",
    image: "/images/image.png",
    prepTime: "1 hour (soaking)",
    cookTime: "40 minutes",
    servings: "8-10 people",
    cuisine: "Himalayan",
    course: "Dessert",
    ingredients: [
      "500 g barnyard millet",
      "2 liters milk",
      "200 g sugar",
      "2-3 drops kewra essence (optional)",
      "50 g cashew nuts",
      "50 g raisins",
      "100 g chironji",
    ],
    steps: [
      "Wash barnyard millet and soak in water for 1 hour.",
      "Boil milk in a heavy pan.",
      "Add soaked millet slowly, stirring well to prevent lumps.",
      "Add sugar and cook until the mixture thickens and millet is fully cooked.",
      "Stir in kewra essence if using.",
      "Garnish with cashew nuts, raisins, and chironji.",
      "Serve warm or chilled.",
    ],
    chefNotes: [
      "Barnyard millet is a healthy alternative to rice - rich in fiber and minerals.",
      "Stir frequently to prevent the kheer from sticking to the bottom.",
      "The longer you cook, the creamier it becomes.",
    ],
    category: "Himalayan",
    difficulty: "medium",
    instructions: [
      "Wash barnyard millet and soak in water for 1 hour.",
      "Boil milk in a heavy pan.",
      "Add soaked millet slowly, stirring well to prevent lumps.",
      "Add sugar and cook until the mixture thickens and millet is fully cooked.",
      "Stir in kewra essence if using.",
      "Garnish with cashew nuts, raisins, and chironji.",
      "Serve warm or chilled.",
    ],
    chefTip: "Barnyard millet is a healthy alternative to rice - rich in fiber and minerals.",
  },
  {
    id: "dhaan-ke-chawal-meetha-bhaat",
    name: "Dhaan Ke Chawal Ka Meetha Bhaat",
    description:
      "Sweet Red Mountain Rice - This sweet rice is a festive and delicious specialty of the Himalayan region and Uttarakhand.",
    image: "/dhaan-ke-chawal-meetha-bhaat.png",
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    servings: "4-6 people",
    cuisine: "Himalayan",
    course: "Dessert",
    ingredients: ["1 cup Pahari red rice (Lal Chawal)", "1½ cups water", "1/2 cup jaggery", "5-6 small coconut pieces"],
    steps: [
      "Wash and soak red rice for 20 minutes.",
      "Boil water and dissolve jaggery in it.",
      "Add red rice and coconut pieces.",
      "Cook gently on low heat until rice is soft and water has evaporated.",
      "Serve warm and enjoy.",
    ],
    chefNotes: [
      "Red rice has a nutty flavor and is packed with antioxidants.",
      "Jaggery adds natural sweetness and iron to this dish.",
      "Perfect for festivals and special occasions in Himalayan homes.",
    ],
    category: "Himalayan",
    difficulty: "easy",
    instructions: [
      "Wash and soak red rice for 20 minutes.",
      "Boil water and dissolve jaggery in it.",
      "Add red rice and coconut pieces.",
      "Cook gently on low heat until rice is soft and water has evaporated.",
      "Serve warm and enjoy.",
    ],
    chefTip: "Red rice has a nutty flavor and is packed with antioxidants.",
  },
  {
    id: "sabji-dahi-kebab",
    name: "Sabji Dahi Ke Kebab",
    description:
      "Vegetable Yogurt Kebabs - Soft and crispy veg patties. A light, healthy snack made with hung curd, fresh vegetables, and spices.",
    image: "/sabji-dahi-kebab.png",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    servings: "6-8 people",
    cuisine: "Himalayan",
    course: "Appetizer",
    ingredients: [
      "600 g hung curd (thick yogurt)",
      "180 g roasted gram flour",
      "60 g chopped onion",
      "60 g chopped green chili",
      "10 g chopped coriander leaves",
      "10 g chopped ginger",
      "15 g salt (to taste)",
      "1/2 tablespoon garam masala",
      "1 tablespoon kasoori methi (dried fenugreek leaves)",
      "1 tablespoon sugar",
      "A pinch of turmeric powder",
      "50 g grated paneer",
      "50 g chopped spinach (optional)",
      "Semolina (सूजी) for coating",
    ],
    steps: [
      "In a large bowl, mix hung curd, roasted gram flour, chopped onion, chopped green chili, coriander, ginger, salt, garam masala, kasoori methi, sugar, turmeric powder, grated paneer, and chopped spinach (if using).",
      "Mix well until all ingredients are combined.",
      "Shape the mixture into small round patties.",
      "Roll each patty in semolina to coat evenly.",
      "Preheat oven to 190°C (375°F) or heat your air fryer to the same temperature.",
      "Place patties on a baking tray lined with parchment paper or in the air fryer basket.",
      "Bake or air fry for 15-25 minutes, or until kebabs turn golden brown and crispy.",
      "Serve hot with mint chutney or yogurt raita.",
    ],
    chefNotes: [
      "Roasting the gram flour is important - it brings out the flavor.",
      "High in fiber, vitamins, and protein - perfect healthy snack.",
      "Can be shallow fried instead of baking for extra crispiness.",
    ],
    category: "Himalayan",
    difficulty: "medium",
    instructions: [
      "In a large bowl, mix hung curd, roasted gram flour, chopped onion, chopped green chili, coriander, ginger, salt, garam masala, kasoori methi, sugar, turmeric powder, grated paneer, and chopped spinach (if using).",
      "Mix well until all ingredients are combined.",
      "Shape the mixture into small round patties.",
      "Roll each patty in semolina to coat evenly.",
      "Preheat oven to 190°C (375°F) or heat your air fryer to the same temperature.",
      "Place patties on a baking tray lined with parchment paper or in the air fryer basket.",
      "Bake or air fry for 15-25 minutes, or until kebabs turn golden brown and crispy.",
      "Serve hot with mint chutney or yogurt raita.",
    ],
    chefTip: "Roasting the gram flour is important - it brings out the flavor.",
  },
  {
    id: "tandoori-duck",
    name: "Tandoori Duck",
    description:
      "Marinated for 24 hours for smoky perfection. Complex marinades with yogurt, spices, and patience. This dish is not cooked; it's earned.",
    image: "/tandoori-duck-charred-smoky-with-orange-red-marina.jpg",
    prepTime: "24 hours",
    cookTime: "30 minutes",
    servings: "4-6 people",
    cuisine: "North Indian",
    course: "Main Course",
    ingredients: [
      "1 whole duck (cleaned and cut into pieces)",
      "200 gm hung yogurt",
      "2 tbsp ginger-garlic paste",
      "2 tsp cumin powder",
      "2 tsp coriander powder",
      "1 tsp red chili powder",
      "½ tsp turmeric powder",
      "2 tbsp lemon juice",
      "Salt to taste",
      "3 tbsp mustard oil",
      "1 tsp garam masala",
    ],
    steps: [
      "Clean duck pieces and make deep cuts for marinade penetration.",
      "Mix all spices with hung yogurt, ginger-garlic paste, lemon juice, and salt.",
      "Heat mustard oil until smoking, then cool slightly and add to marinade.",
      "Coat duck pieces thoroughly with marinade.",
      "Cover and refrigerate for 24 hours, turning occasionally.",
      "Preheat tandoor or oven to 250°C.",
      "Roast duck pieces for 25-30 minutes, basting with oil.",
      "Cook until charred on the outside and cooked through.",
      "Sprinkle garam masala and serve hot with mint chutney.",
    ],
    chefNotes: [
      "24-hour marination is crucial - don't skip this step.",
      "Complex marinades, patience, and fire — this dish is not cooked; it's earned.",
      "Duck has more fat than chicken, so longer cooking helps render it.",
    ],
    category: "North Indian",
    difficulty: "advanced",
    instructions: [
      "Clean duck pieces and make deep cuts for marinade penetration.",
      "Mix all spices with hung yogurt, ginger-garlic paste, lemon juice, and salt.",
      "Heat mustard oil until smoking, then cool slightly and add to marinade.",
      "Coat duck pieces thoroughly with marinade.",
      "Cover and refrigerate for 24 hours, turning occasionally.",
      "Preheat tandoor or oven to 250°C.",
      "Roast duck pieces for 25-30 minutes, basting with oil.",
      "Cook until charred on the outside and cooked through.",
      "Sprinkle garam masala and serve hot with mint chutney.",
    ],
    chefTip: "24-hour marination is crucial - don't skip this step.",
  },
  {
    id: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    description:
      "Individual chocolate cake with a molten center. Slightly undercooked for that perfect gooey texture. Perfect romantic dessert ready in 25 minutes.",
    image: "/chocolate-lava-cake-molten-center-flowing-with-pow.jpg",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: "4 people",
    cuisine: "International",
    course: "Dessert",
    ingredients: [
      "Dark chocolate – 100 gm",
      "Butter – 90 gm",
      "All-purpose flour – 80 gm",
      "Powdered sugar – 70 gm",
      "Eggs – 4 no.",
      "Vanilla – few drops",
    ],
    steps: [
      "Melt dark chocolate and butter together.",
      "Beat eggs and powdered sugar until fluffy.",
      "Fold in melted chocolate mixture.",
      "Add flour and vanilla, mix gently.",
      "Pour into greased molds.",
      "Bake at 200°C for 8-10 minutes until edges are firm but center is still soft.",
      "Let rest for 1 minute, then invert onto plate.",
      "Serve immediately with powdered sugar or ice cream.",
    ],
    chefNotes: [
      "The key is to slightly undercook for that perfect molten center.",
      "Timing is everything - don't overbake!",
      "If you like my work — like & subscribe my YouTube channel ChefSMagic.",
    ],
    category: "International",
    difficulty: "easy",
    instructions: [
      "Melt dark chocolate and butter together.",
      "Beat eggs and powdered sugar until fluffy.",
      "Fold in melted chocolate mixture.",
      "Add flour and vanilla, mix gently.",
      "Pour into greased molds.",
      "Bake at 200°C for 8-10 minutes until edges are firm but center is still soft.",
      "Let rest for 1 minute, then invert onto plate.",
      "Serve immediately with powdered sugar or ice cream.",
    ],
    chefTip: "The key is to slightly undercook for that perfect molten center.",
  },
  {
    id: "cold-cheesecake",
    name: "Cold / No-Bake Cheesecake",
    description:
      "Classic chilled dessert made with mascarpone cheese and Greek yogurt on a cookie crust. Light, creamy, and refreshing with fresh strawberries.",
    image: "/no-bake-strawberry-cheesecake-slice-with-fresh-ber.jpg",
    prepTime: "30 minutes",
    cookTime: "0 minutes (chilled)",
    servings: "8-10 people",
    cuisine: "International",
    course: "Dessert",
    ingredients: [
      "Mascarpone cheese – 230 gm",
      "Greek Yogurt – 200 gm",
      "Sugar – 220 gm",
      "Gelatin – 20 gm",
      "Vanilla – few drops",
      "Whipped cream – 500 ml",
      "Chopped strawberries – 200 gm",
      "Cookies – 1 packet",
      "Butter – 80 gm",
    ],
    steps: [
      "Crush cookies and mix with melted butter. Spread as base in pan and press firmly.",
      "Dissolve gelatin in warm water.",
      "Mix Greek yogurt and mascarpone cheese; add sugar until dissolved.",
      "Add vanilla and dissolved gelatin, then fold in whipped cream gently.",
      "Fold in chopped strawberries.",
      "Pour mixture over cookie crust.",
      "Chill in refrigerator for 2–3 hours or until set.",
      "Cut into slices and decorate with fresh strawberries before serving.",
    ],
    chefNotes: [
      "Make sure gelatin is completely dissolved before adding.",
      "Fold gently to maintain the airy texture of whipped cream.",
      "Can be made a day ahead for best results.",
    ],
    category: "International",
    difficulty: "easy",
    instructions: [
      "Crush cookies and mix with melted butter. Spread as base in pan and press firmly.",
      "Dissolve gelatin in warm water.",
      "Mix Greek yogurt and mascarpone cheese; add sugar until dissolved.",
      "Add vanilla and dissolved gelatin, then fold in whipped cream gently.",
      "Fold in chopped strawberries.",
      "Pour mixture over cookie crust.",
      "Chill in refrigerator for 2–3 hours or until set.",
      "Cut into slices and decorate with fresh strawberries before serving.",
    ],
    chefTip: "Make sure gelatin is completely dissolved before adding.",
  },
]

export default function SignatureCreationsSection() {
  const [showAll, setShowAll] = useState(false)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const displayedDishes = showAll ? dishes : dishes.slice(0, 4)

  return (
    <section
      id="signature-creations"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-ice-blue"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <ChefHat className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-mountain-teal" />
            <span className="text-xs sm:text-sm md:text-base font-bold text-mountain-teal uppercase tracking-wider">
              From My Kitchen to Yours
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance bg-gradient-to-r from-himalayan-blue via-royal-blue to-mountain-teal bg-clip-text text-transparent px-4 pb-2">
            Signature Creations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed px-4 max-w-3xl mx-auto">
            A curated selection of dishes that define my culinary journey—blending traditional Himalayan ingredients
            with modern techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayedDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setSelectedImage(dish.image)}
                className="relative h-64 w-full overflow-hidden block cursor-pointer"
              >
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    {dish.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                    Click to enlarge
                  </span>
                </div>
              </button>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
                  onClick={() => setSelectedDish(dish)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {dishes.length > 4 && (
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group px-8 py-4 bg-gradient-to-r from-himalayan-blue to-mountain-teal hover:from-royal-blue hover:to-peacock-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <span>{showAll ? "View Less" : `View All ${dishes.length} Recipes`}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>

      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={selectedDish.image || "/placeholder.svg"}
                alt={selectedDish.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedDish.name}</h3>
                <p className="text-white/90 text-lg">{selectedDish.description}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white text-gray-900">
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">{selectedDish.prepTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">{selectedDish.servings}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <ChefHat className="w-5 h-5 text-primary" />
                  <span className="font-medium capitalize">{selectedDish.difficulty}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ingredients</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDish.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Instructions</h3>
                <ol className="space-y-4">
                  {selectedDish.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {selectedDish.chefTip && (
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Chef's Tip</h4>
                  <p className="text-gray-700">{selectedDish.chefTip}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
          >
            <X className="w-8 h-8 text-white" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Dish image"
              fill
              className="object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  )
}
