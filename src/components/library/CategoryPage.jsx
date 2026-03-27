import { useParams } from "react-router-dom";
import { categories } from "./Gallery";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === parseInt(categoryId));

  if (!category) {
    return (
      <div className="text-center text-xl font-semibold py-10">
        Category not found
      </div>
    );
  }

  // Animation for the title - done
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation for the image grid items
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Category Title with Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {category.title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore our curated collection of {category.title.toLowerCase()}{" "}
          designs
        </motion.p>

        {/* Image Grid with Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          {category.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500"
              variants={imageItemVariants}
              whileHover={{ y: -2, scale: 1.01 }}
            >
              <div className="flex items-center justify-center p-4 bg-white rounded-lg">
                <img
                  src={image}
                  alt={`${category.title} ${index + 1}`}
                  className="max-w-[250px] max-h-[250px] object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white font-semibold text-lg">
                  {category.title} Design {index + 1}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Premium interior design
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
