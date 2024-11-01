interface IProduct {
  id: number
  title: string
  category:
    | 'Upper Body'
    | 'Lower Body'
    | 'Hat'
    | 'Shoes'
    | 'Accessory'
    | 'Legendary'
    | 'Mythic'
    | 'Epic'
    | 'Rare'
  price: number
  isFavorite: boolean
  createdAt: number
  theme: 'Dark' | 'Light' | 'Colorful' | 'Halloween'
  tier: 'Basic' | 'Premium' | 'Deluxe'
  image: string // generate
  background: string // generate
  author: IAuthor
}

interface IAuthor {
  firstName: string
  lastName: string
  email: string
  gender: string
  avatar: string
  onlineStatus: string
}

export type { IAuthor, IProduct }
