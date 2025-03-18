document.addEventListener("DOMContentLoaded", main);

        const ramens = [
            { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "download (1).jpeg", rating: 5, comment: "Delicious!" },
            { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "download (2).jpeg", rating: 4, comment: "Very flavorful!" },
            { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "download.jpeg", rating: 3, comment: "Rich and creamy!" }
        ];

        function displayRamens() {
            const menu = document.getElementById("ramen-menu");
            menu.innerHTML = "";
            ramens.forEach(ramen => {
                const img = document.createElement("img");
                img.src = ramen.image;
                img.alt = ramen.name;
                img.addEventListener("click", () => showRamenDetails(ramen));
                menu.appendChild(img);
            });
        }

        function showRamenDetails(ramen) {
            document.getElementById("ramen-name").textContent = ramen.name;
            document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
            document.getElementById("ramen-image").src = ramen.image;
            document.getElementById("ramen-rating").textContent = ramen.rating;
            document.getElementById("ramen-comment").textContent = ramen.comment;
        }

        function addSubmitListener() {
            document.getElementById("ramen-form").addEventListener("submit", function(event) {
                event.preventDefault();
                const newRamen = {
                    name: document.getElementById("name").value,
                    restaurant: document.getElementById("restaurant").value,
                    image: document.getElementById("image").value,
                    rating: document.getElementById("rating").value,
                    comment: document.getElementById("comment").value
                };
                ramens.push(newRamen);
                displayRamens();
                this.reset();
            });
        }

        function main() {
            displayRamens();
            addSubmitListener();
            showRamenDetails(ramens[0]); // Show the first ramen on page load
        }