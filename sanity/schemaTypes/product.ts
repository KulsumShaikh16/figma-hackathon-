const productSchema ={
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image', // Image field change here
        title: 'Image',
        type: 'image', // Correct type to handle image references
        options: {
          hotspot: true, // Enable image cropping for better control
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
      },
      {
        name: 'isFeaturedProduct',
        title: 'Is Featured Product',
        type: 'boolean',
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
          source: "name",
         
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
    ],
  };

  export default productSchema