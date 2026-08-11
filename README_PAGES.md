# MovieDB - Complete IMDB-like Application

## 🎬 Project Summary

MovieDB is a full-featured movie database application built with React and TypeScript. It replicates the core functionality and design patterns of IMDB (Internet Movie Database), providing users with comprehensive movie and TV show information, actor profiles, reviews, ratings, and entertainment news.

## 📊 What's Included

### Total Pages Created: **17**
### Total Reusable Components: **4**
### Total Custom Components: **20+**

## 🏠 Page Navigation Guide

### 🌟 Main Sections

| Page | Route | Features |
|------|-------|----------|
| **Home/Dashboard** | `/` | Trending people, popular content |
| **Movie Details** | `/movie/:id` | Full movie info, cast, reviews, videos |
| **Person Profile** | `/person/:id` | Actor bio, filmography, photos |

### 🔍 Browse & Discovery

| Page | Route | Features |
|------|-------|----------|
| **Trending** | `/trending` | Daily/Weekly trending movies & shows |
| **Top Rated** | `/top-rated` | Highest-rated movies and TV shows |
| **Browse Movies** | `/browse` | Filter, sort, and browse by genre/year |
| **TV Shows** | `/tvshows` | Browse TV series by status |
| **Advanced Search** | `/advanced-search` | Comprehensive multi-filter search |

### 👤 User Features

| Page | Route | Features |
|------|-------|----------|
| **Watchlist** | `/watchlist` | Manage watched/watching/completed lists |
| **Profile** | `/profile` | User stats, ratings, reviews, favorites |

### 📋 Movie Details

| Page | Route | Features |
|------|-------|----------|
| **Full Cast & Crew** | `/full-cast/:id` | Complete cast list, departments |
| **Ratings & Reviews** | `/ratings/:id` | Rating distribution, charts, demographics |
| **Parental Guide** | `/parental-guide/:id` | Content warnings, age recommendations |
| **Movie Info** | `/movie-info/:id` | Box office, budget, runtime, languages |
| **Companies** | `/companies/:id` | Production, distribution, effects companies |
| **Search Results** | `/search` | Browse search results with filters |

### 📰 Entertainment News

| Page | Route | Features |
|------|-------|----------|
| **News** | `/news` | Entertainment news by category |

## 🧩 Reusable Components

### 1. **MovieCast** Component
```tsx
<MovieCast cast={castArray} />
```
- Displays top 12 cast members
- Lazy-loads profile images
- Links to actor profiles
- Fallback avatars for missing images

### 2. **MovieImages** Component
```tsx
<MovieImages images={imageArray} title="Movie Title" />
```
- Interactive image gallery
- Modal full-screen viewing
- Responsive grid layout
- Zoom and preview capabilities

### 3. **MovieVideos** Component
```tsx
<MovieVideos videos={videoArray} title="Movie Title" />
```
- YouTube video preview cards
- Modal video player
- Video type indicators
- Thumbnail display

### 4. **MovieReviews** Component
```tsx
<MovieReviews reviews={reviewArray} />
```
- User review cards
- Star ratings
- Author information
- Helpful count tracking

## 🎨 Design Features

✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Material-UI Components** - Professional, modern UI
✅ **Dark Theme** - Eye-friendly dark mode by default
✅ **Card-based Layout** - Clean, organized information display
✅ **Icon Integration** - MUI icons throughout
✅ **Modal Dialogs** - Gallery and video viewers
✅ **Tab Navigation** - Organized content sections
✅ **Pagination** - Browse large datasets
✅ **Filtering & Sorting** - Advanced content discovery
✅ **Charts & Graphs** - Visual data representation (Recharts)

## 🔧 Technical Stack

```json
{
  "frontend": "React 19.2.8",
  "language": "TypeScript 4.9.5",
  "ui_framework": "Material-UI 9.2.0",
  "routing": "React Router DOM 7.18.2",
  "state_management": "Redux Toolkit 2.12.0",
  "http_client": "Axios 1.19.0",
  "charts": "Recharts (built-in)",
  "styling": "Emotion (via MUI)",
  "icons": "MUI Icons 9.2.0"
}
```

## 📁 Project Structure

```
moviedb/
├── public/
│   ├── index.html
│   ├── main.css
│   ├── favicon.ico
│   └── imagenotfound.png
│
├── src/
│   ├── pages/
│   │   ├── dashboard/              ← Home
│   │   ├── movie/                  ← Movie Details
│   │   ├── person/                 ← Actor Profile
│   │   ├── trending/               ← Trending Content
│   │   ├── top-rated/              ← Top Rated
│   │   ├── browse/                 ← Browse Movies
│   │   ├── tvshows/                ← TV Shows
│   │   ├── watchlist/              ← Watchlist
│   │   ├── search/                 ← Search Results
│   │   ├── advanced-search/        ← Advanced Search
│   │   ├── full-cast/              ← Full Cast & Crew
│   │   ├── ratings/                ← Ratings & Reviews
│   │   ├── parental-guide/         ← Parental Guide
│   │   ├── movie-info/             ← Movie Info
│   │   ├── companies/              ← Companies
│   │   ├── profile/                ← User Profile
│   │   └── news/                   ← News
│   │
│   ├── components/
│   │   ├── header/                 ← Navigation Header
│   │   ├── MovieCast.tsx           ← Cast Component
│   │   ├── MovieImages.tsx         ← Image Gallery
│   │   ├── MovieVideos.tsx         ← Video Player
│   │   ├── MovieReviews.tsx        ← Reviews Display
│   │   └── TrendingPeople.tsx      ← Trending Display
│   │
│   ├── router.ts                   ← Route Configuration
│   ├── store.ts                    ← Redux Store
│   ├── api.tsx                     ← API Configuration
│   ├── hook.ts                     ← Custom Hooks
│   └── index.tsx                   ← Entry Point
│
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── PAGES_DOCUMENTATION.md
```

## 🚀 Getting Started

### Installation
```bash
cd moviedb
npm install
```

### Development
```bash
npm start
```
Opens http://localhost:3000 in your browser

### Build
```bash
npm run build
```

### Production Build (Windows)
```bash
npm run winBuild
```

## 📱 Navigation Menu

### Header Navigation
- **MovieDB Logo** - Returns to home
- **Home** - Dashboard with trending content
- **Trending** - Current trending movies/shows
- **Top Rated** - Highest-rated content
- **Browse** - Browse movies with filters
- **TV Shows** - TV series section
- **More Menu** (dropdown)
  - Advanced Search
  - News
  - Watchlist
  - Profile

### Search Bar
Located in header for quick search across all content

## 🎯 Key Features by Page

### Discovery
- **Trending**: Time-based trending (daily/weekly)
- **Top Rated**: Ranked by ratings
- **Browse**: Multi-filter browsing (genre, year, rating, sort)

### Information
- **Movie Details**: Complete movie information with multimedia
- **Actor Profile**: Full biography and filmography
- **Ratings**: Statistical breakdown with charts
- **Parental Guide**: Age-appropriate content warnings

### User Management
- **Watchlist**: Track movies (watchlist/watching/completed)
- **Profile**: User stats and preferences

### Content
- **Cast & Crew**: Full crew information
- **Companies**: Production details
- **News**: Entertainment news by category

## 🔐 Data & Mock Data

All pages currently use **mock data** for demonstration. To integrate real data:

1. **API Integration**: Connect to TMDB, OMDB, or similar API
2. **Redux Store**: Update with actual API calls
3. **Error Handling**: Add loading and error states
4. **Caching**: Implement data caching strategies

### Example: Updating a Page with Real API
```typescript
// Replace mock data with API call
const { data } = useFetchMovieQuery(movieId);
// Render with real data
```

## 🎨 Customization

### Theme
Edit `/src/constants/theme.ts`:
```typescript
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    // ... customize colors
  },
});
```

### Colors & Styling
- Primary color: `#1976d2` (Blue)
- Background: Dark theme (configurable)
- Components: Material-UI default spacing and sizing

## 📊 Component Features

### Filtering & Sorting
- Genre filters
- Year range sliders
- Rating filters
- Sort options (popularity, rating, date, title)

### Display Options
- Grid/List views
- Card-based layouts
- Table displays (cast list)
- Modal galleries (photos)

### User Interactions
- Rating system
- Review display
- Watchlist management
- Favorite tracking

## 🔗 URL Routing

All routes use hash-based routing (#/):
```
http://localhost:3000/#/
http://localhost:3000/#/movie/238
http://localhost:3000/#/person/123
http://localhost:3000/#/browse?genre=action
```

## 📈 Performance Optimizations

- Lazy loading of images
- Pagination for large datasets
- Responsive grid layouts
- Material-UI optimizations
- Redux memoization

## 🎓 Learning Resources

### File Structure
- **Pages** in `/src/pages/` - Full page components
- **Components** in `/src/components/` - Reusable components
- **Router** in `src/router.ts` - Route definitions
- **Styles** via Material-UI theme system

### Best Practices Implemented
- TypeScript for type safety
- React hooks for state management
- Component composition
- Responsive design patterns
- Material-UI design system

## 🐛 Troubleshooting

### Missing Images
- Check IMAGE_URL constants in `/src/api.tsx`
- Images use TMDB image URLs by default

### Route Not Found
- Verify route path in `src/router.ts`
- Check component imports
- Ensure component is properly exported

### Styling Issues
- Clear browser cache
- Check MUI theme configuration
- Verify CSS imports

## 📝 Notes

- All data is mock/placeholder data
- Images and content are for demonstration
- Responsive breakpoints: xs, sm, md, lg, xl
- Mobile-first design approach

## 🎬 Example Usage

### View a Movie
1. Click "Browse" → Select a movie
2. Or navigate directly: `/#/movie/238`

### Search Content
1. Use search bar in header
2. Or go to Advanced Search: `/#/advanced-search`

### Manage Watchlist
1. Click "Watchlist" in header
2. Add/remove movies
3. Track viewing progress

### View Actor Info
1. Browse cast on movie page
2. Click actor name
3. View filmography

## 📞 Support

For issues or questions:
1. Check PAGES_DOCUMENTATION.md for detailed info
2. Review component implementations
3. Check TypeScript types for expected props

---

**Happy Exploring! 🎬🍿**

Built with React, TypeScript, and Material-UI

