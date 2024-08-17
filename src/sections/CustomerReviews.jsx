import {reviews} from "../constants"
import { ReviewCard } from "../components/"

const CustomerReviews = () => {
  return (
    <section className = "max-container">
      <div className = "text-4xl font-palanquin font-bold text-center">
        <span>What Our </span>
        <span className = "text-coral-red">Customers</span> Say?
      </div>
      <p className = "m-auto mt-4 text-center info-text">Hear genuine stories from our satisfied customers about their
      exceptional experiences with us.</p>

      <div className = "font-bold">
        {reviews.map((review) => (
          <ReviewCard key = {review.customerName} {...review} />
        ))}
      </div>
      </section>
  )
}

export default CustomerReviews