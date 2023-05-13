export function createRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const rate = rating;

    const fullStarIcon = '<i class="fa fa-star star"></i>'
    const halfStarIcon = '<i class="fa fa-star star-half"></i>'
    const emptyStarIcon = '<i class="fa fa-star star-empty"></i>'

    let ratingHtml = '';

    for (let i = 0; i < fullStars; i++) {
      ratingHtml += `${fullStarIcon}`;
    }
    if (halfStar) {
      ratingHtml += `${halfStarIcon}`;
    }
    for (let i = 0; i < emptyStars; i++) {
      ratingHtml += `${emptyStarIcon}`;
    }
  
    return `<span>${rate}</span> ${ratingHtml}`;
}  
