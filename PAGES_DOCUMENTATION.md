# MovieDB - IMDB-like Application

## Project Overview
This is a React-based movie database application inspired by IMDB (Internet Movie Database). It provides a comprehensive platform for browsing movies, TV shows, actors, and entertainment news.

## Pages & Features Created

### Main Pages

#### 1. **Home/Dashboard** (`/`)
- Displays trending people and popular content
- Landing page for the application

#### 2. **Movie Details** (`/movie/:id`)
- Complete movie information including:
  - Poster and backdrop images
  - Overview and synopsis
  - Genres and ratings
  - Director, writers, and main cast
  - Videos and photos
  - Reviews and user ratings

#### 3. **Search Results** (`/search`)
- Search for movies, TV shows, and actors
- Filter by media type
- Pagination support
- Display search results in card format

#### 4. **Person/Actor Details** (`/person/:id`)
- Actor/person profile information
- Biography and personal details
- Birth date and place of birth
- Filmography with movies and TV shows
- Popularity metrics

### Browse & Discovery Pages

#### 5. **Trending** (`/trending`)
- Display trending movies and TV shows
- Time window selection (Today/This Week)
- Media type filtering (All/Movies/TV)
- Trending rank indicators
- Ratings and release information

#### 6. **Top Rated** (`/top-rated`)
- Browse highest-rated movies and TV shows
- Ranked by user ratings
- Toggle between Movies and TV Shows
- Pagination for browsing

#### 7. **Browse Movies** (`/browse`)
- Advanced filtering options:
  - Sort by popularity, rating, release date, or title
  - Filter by genre
  - Filter by release year
- Grid view with detailed information
- Pagination support

#### 8. **TV Shows** (`/tvshows`)
- Dedicated page for TV series
- Filter by status (Currently Airing/Returning/Ended)
- Rating and release information
- Tab-based navigation

### User & Watchlist Pages

#### 9. **Watchlist** (`/watchlist`)
- Manage watched and to-watch lists
- Three categories: Watchlist, Watching, Completed
- Add/remove movies
- Track when movies were added
- Quick access to browse more

#### 10. **User Profile** (`/profile`)
- User profile page with stats
- Display ratings count, reviews count, watchlist items
- Favorite movies showcase
- User bio and join date
- Edit profile functionality

### Information & Details Pages

#### 11. **Full Cast & Crew** (`/full-cast/:id`)
- Comprehensive cast list in table format
- Crew information with departments
- Billing order for actors
- Links to individual profiles

#### 12. **Ratings & Reviews** (`/ratings/:id`)
- Rating distribution charts
- Average rating and statistics
- Rating breakdown by star level
- Gender demographics pie chart
- Weighted average calculations

#### 13. **Parental Guide** (`/parental-guide/:id`)
- Content rating by category:
  - Violence & Gore
  - Profanity
  - Alcohol/Drug Use
  - Sexual Content
  - Frightening Scenes
- Severity indicators (None/Mild/Moderate/Severe)
- Age recommendations
- Detailed descriptions of content

#### 14. **Production Companies** (`/companies/:id`)
- Production company information
- Distribution companies
- Special effects and services providers
- Company websites and locations

#### 15. **Movie Info** (`/movie-info/:id`)
- Detailed movie information tabs:
  - Overview (status, release date, runtime, languages)
  - Box Office (budget, revenue, ROI)
  - Production details
- Tagline and keywords
- Official website links

### Search & News Pages

#### 16. **Advanced Search** (`/advanced-search`)
- Comprehensive search filters:
  - Title search
  - Multiple genre selection
  - Release type selection
  - Year range slider
  - Rating range slider
  - Sort options
- Clear filters functionality

#### 17. **News & Entertainment** (`/news`)
- Browse entertainment news
- Categorized by type:
  - Box Office
  - Awards
  - Interviews
  - Behind the Scenes
- News cards with images and excerpts
- Publication date and author information
- Pagination support

## Components Created

### Reusable Components

1. **MovieCast** (`MovieCast.tsx`)
   - Display top 12 cast members
   - Profile images with fallback avatars
   - Link to full cast page
   - Clickable actor profiles

2. **MovieImages** (`MovieImages.tsx`)
   - Image gallery with modal viewer
   - Responsive image grid
   - Full-screen image viewing
   - Close functionality

3. **MovieVideos** (`MovieVideos.tsx`)
   - Video gallery display
   - YouTube video preview thumbnails
   - Video modal player
   - Video type indicators

4. **MovieReviews** (`MovieReviews.tsx`)
   - User review display
   - Star rating system
   - Author information
   - Helpful count tracking
   - Avatar display

## Navigation Structure

The header includes:
- **Logo** - Link to home
- **Main Menu** - Home, Trending, Top Rated, Browse, TV Shows
- **More Menu** - Advanced Search, News, Watchlist, Profile
- **Search Bar** - Quick search functionality
- **Responsive Design** - Mobile-friendly navigation

## Key Features

✅ Movie browsing and discovery
✅ Actor/Person profiles
✅ Advanced search with multiple filters
✅ Watchlist management
✅ Rating and review system
✅ Parental guide information
✅ Box office information
✅ Production company details
✅ Entertainment news
✅ User profiles
✅ Cast and crew information
✅ Image and video galleries
✅ Trending content
✅ Top-rated movies and shows
✅ TV shows section
✅ Responsive design for mobile/tablet/desktop

## Technology Stack

- **Frontend Framework**: React 19.2
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v9.2
- **Routing**: React Router DOM 7.18
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Charts**: Recharts
- **Styling**: Emotion (MUI)

## File Structure

```
src/
├── pages/
│   ├── dashboard/
│   ├── movie/
│   ├── search/
│   ├── person/
│   ├── trending/
│   ├── top-rated/
│   ├── browse/
│   ├── tvshows/
│   ├── watchlist/
│   ├── full-cast/
│   ├── ratings/
│   ├── parental-guide/
│   ├── companies/
│   ├── advanced-search/
│   ├── movie-info/
│   ├── profile/
│   └── news/
├── components/
│   ├── MovieCast.tsx
│   ├── MovieImages.tsx
│   ├── MovieVideos.tsx
│   ├── MovieReviews.tsx
│   └── header/
└── router.ts
```

## Usage

### Start the application:
```bash
npm start
```

### Build for production:
```bash
npm run build
```

### Run tests:
```bash
npm test
```

## Mock Data

All pages use mock data for demonstration. To integrate with a real API:

1. Replace mock data with API calls
2. Update component props to accept dynamic data
3. Implement Redux actions for data fetching
4. Add loading and error states

## Future Enhancements

- [ ] Real API integration with TMDB or similar
- [ ] User authentication and accounts
- [ ] Social features (sharing, following)
- [ ] Movie recommendations
- [ ] Advanced filtering and sorting
- [ ] Download/offline viewing
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Admin panel for content management

---

**Note**: This application uses mock data and placeholder images. For production use, integrate with a real movie database API (such as TMDB API).

