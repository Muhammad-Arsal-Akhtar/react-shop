
import CategoryMen from "../assets/images/category-men.jpg"
import CategoryWomen from "../assets/images/category-women.jpg"
import CategoryKids from "../assets/images/category-kids.jpg"


const CategorySection = () => {

    const categoryData = [
        { title: 'Mens', image: CategoryMen },
        { title: 'Women', image: CategoryWomen },
        { title: 'Kids', image: CategoryKids },
    ]

    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                {categoryData.map((category, index) => (
                    <a key={`category-${index}`} href="#" className="block">
                        <img
                            alt=""
                            src={category.image}
                            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                        />

                        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                            <strong className="font-medium">{category.title}</strong>

                            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                            <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
                        </div>
                    </a>

                ))}

            </div>
        </>

    )
}

export default CategorySection