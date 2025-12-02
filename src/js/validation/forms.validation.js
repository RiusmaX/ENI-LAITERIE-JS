import { object, string } from 'yup'

const restaurantSchema = object({
  nom: string().required('Nom est requis').min(2).max(150),
  type: string().oneOf([
    'Français',
    'Japonais',
    'Italien',
    'Américain',
    'Indien',
    'Chinois',
    'Savoyard',
    'Espagnol',
    'Vietnamien',
    'Fruits de mer',
    'Libanais',
    'Fast Food'
  ]).required()
})

export async function validateRestaurantForm (restaurantData) {
  const parsedRestaurant = await restaurantSchema.validateSync(restaurantData, { abortEarly: false })
  return parsedRestaurant
}
