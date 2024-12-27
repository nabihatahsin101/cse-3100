import { useEffect, useState } from 'react';
import './AvailableCats.css'; // Import the CSS file

// List of available cats with their basic information
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Peterbald' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

// List of possible breeds for the dropdown
const breeds = ['All', 'Sphynx', 'Birman', 'Persian', 'Peterbald', 'Abyssinian', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch cat images and assign random breeds
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImagesAndBreeds = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
          breed: breeds[Math.floor(Math.random() * (breeds.length - 1)) + 1], // Assign a random breed (excluding "All")
        }));
        setCats(catsWithImagesAndBreeds);
        setFilteredCats(catsWithImagesAndBreeds);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };
    fetchCatImages();
  }, []);

  // Handle breed filter
  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
    filterCats(e.target.value, searchTerm);
  };

  // Handle name search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterCats(selectedBreed, e.target.value);
  };

  // Filter cats based on breed and search term
  const filterCats = (breed, term) => {
    let filtered = cats;
    if (breed !== 'All') {
      filtered = filtered.filter((cat) => cat.breed === breed);
    }
    if (term) {
      filtered = filtered.filter((cat) => cat.name.toLowerCase().includes(term.toLowerCase()));
    }
    setFilteredCats(filtered);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters mb-4">
        <select className="form-select me-2" value={selectedBreed} onChange={handleBreedChange}>
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Cat Cards */}
      <div className="row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '10px', height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No cats found matching the criteria.</p>
        )}
      </div>
    </section>
  );
}
