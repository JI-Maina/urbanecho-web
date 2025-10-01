import React, { useState, useMemo } from 'react';
import { MagnifyingGlass, X, FileText, ArrowDown } from '@phosphor-icons/react';
import { useColor } from '@/providers/theme-provider';
import {
  BlogSectionContainer,
  BlogContent,
  BlogHeader,
  BlogTitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ClearButton,
  MasonryGrid,
  BlogCard,
  BlogCardImage,
  BlogCardContent,
  BlogCardCategory,
  BlogCardMeta,
  BlogCardDate,
  BlogCardReadTime,
  BlogCardTitle,
  BlogCardExcerpt,
  NoResultsContainer,
  NoResultsText,
  NoResultsIcon,
  LoadMoreContainer,
  LoadMoreButton,
} from './blog-section.styled';

// Mock blog data - replace with your actual data
const blogPosts = [
  {
    id: 1,
    title: "How We're Mapping the Future Infrastructure Networks",
    excerpt: "Discover how our advanced mapping techniques are revolutionizing urban infrastructure planning for sustainable city development.",
    image: "/images/19354.jpg",
    height: "200px",
    category: "How-To",
    date: "August 30, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Data Behind Bangkok's Urban Transformation",
    excerpt: "An in-depth look at the data-driven insights transforming Bangkok's urban landscape through innovative analytics.",
    image: "/images/alex-shuper-bkTH9QrJdFo-unsplash.jpg",
    height: "180px",
    category: "Case Study",
    date: "August 25, 2025",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "From Data to Planning: Urban Analytics in Cities",
    excerpt: "How cities worldwide are leveraging urban analytics to make informed planning decisions for better communities.",
    image: "/images/alina-grubnyak-ZiQkhI7417A-unsplash.jpg",
    height: "220px",
    category: "Analytics",
    date: "August 20, 2025",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "A Planner's Guide to Synthetic Population Modelling",
    excerpt: "Deep dive into the technical aspects of creating synthetic populations for urban simulation and planning.",
    image: "/images/brain_data.png",
    height: "160px",
    category: "How-To",
    date: "August 30, 2025",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Streamlining the Concept of a Services Infrastructure",
    excerpt: "Understanding how services infrastructure can be optimized through data-driven approaches and modern technology.",
    image: "/images/brainstorming_session.png",
    height: "240px",
    category: "Infrastructure",
    date: "August 15, 2025",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "The Ethical Dimensions of AI in Urban Planning",
    excerpt: "Exploring the ethical considerations when implementing AI solutions in urban planning and city development.",
    image: "/images/conny-schneider-s8JOKMUiyo4-unsplash.jpg",
    height: "190px",
    category: "Ethics",
    date: "August 10, 2025",
    readTime: "9 min read"
  },
  {
    id: 7,
    title: "Why Humans Behaved Alike During Lockdown",
    excerpt: "Analyzing human behavior patterns during lockdown periods and their implications for urban planning.",
    image: "/images/danielle-suijkerbuijk-3lhweEF3nQQ-unsplash.jpg",
    height: "210px",
    category: "Research",
    date: "August 5, 2025",
    readTime: "7 min read"
  },
  {
    id: 8,
    title: "Smart City Technologies and Their Impact",
    excerpt: "How scenario planning and 'what-if' analysis capabilities are transforming urban development strategies.",
    image: "/images/data-overlay-confused-business-people-office-problem-solving-system-future-technology-hologram-man-women-working-together-programming-code-online-error-digital-agency.jpg",
    height: "170px",
    category: "Technology",
    date: "July 30, 2025",
    readTime: "8 min read"
  },
  {
    id: 9,
    title: "Beyond the Gap: The Rise of Digital Urban Planning",
    excerpt: "Bridging the gap between traditional planning methods and modern digital urban planning solutions.",
    image: "/images/demographic-census-concept-representation.jpg",
    height: "200px",
    category: "Digital Planning",
    date: "July 25, 2025",
    readTime: "6 min read"
  },
  {
    id: 10,
    title: "Data-Driven Urban Development Strategies",
    excerpt: "Identifying and analyzing the key factors that impact urban development through comprehensive data analysis.",
    image: "/images/fernando-santander-yjWjLmv13FI-unsplash.jpg",
    height: "180px",
    category: "Strategy",
    date: "July 20, 2025",
    readTime: "10 min read"
  },
  {
    id: 11,
    title: "Smart City Planning for Sustainable Communities",
    excerpt: "Innovative approaches to smart city planning that prioritize sustainable living and community well-being.",
    image: "/images/full-frame-shot-city.jpg",
    height: "230px",
    category: "Sustainability",
    date: "July 15, 2025",
    readTime: "7 min read"
  },
  {
    id: 12,
    title: "Future of Transportation in Smart Cities",
    excerpt: "Exploring innovative transportation solutions and their integration in modern urban environments.",
    image: "/images/gints-gailis-dn8xoYmzLZg-unsplash.jpg",
    height: "195px",
    category: "Transportation",
    date: "July 10, 2025",
    readTime: "8 min read"
  }
];

interface BlogCardProps {
  post: typeof blogPosts[0];
  onClick: () => void;
}

const BlogCardComponent: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const bgColor = useColor("surface.surface-l1");
  const borderColor = useColor("border.border-tertiary");
  const titleColor = useColor("content.content-primary");
  const excerptColor = useColor("content.content-secondary");
  const categoryBgColor = useColor("background.background-brand");
  const categoryTextColor = useColor("content.content-primary-inverse");
  const metaTextColor = useColor("content.content-tertiary");

  return (
    <BlogCard
      $bgColor={bgColor}
      $borderColor={borderColor}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <BlogCardImage $imageUrl={post.image} $height={post.height} />
      <BlogCardContent>
        <BlogCardCategory 
          $categoryColor={categoryTextColor}
          $bgColor={categoryBgColor}
        >
          {post.category}
        </BlogCardCategory>
        
        <BlogCardMeta>
          <BlogCardDate $textColor={metaTextColor}>
            {post.date}
          </BlogCardDate>
          <BlogCardReadTime $textColor={metaTextColor}>
            {post.readTime}
          </BlogCardReadTime>
        </BlogCardMeta>
        
        <BlogCardTitle $textColor={titleColor}>
          {post.title}
        </BlogCardTitle>
        <BlogCardExcerpt $textColor={excerptColor}>
          {post.excerpt}
        </BlogCardExcerpt>
      </BlogCardContent>
    </BlogCard>
  );
};

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6); // Show 6 posts initially
  const [isLoading, setIsLoading] = useState(false);

  // Colors
  const bgColor = useColor("surface.surface-l0");
  const titleColor = useColor("content.content-primary");
  const borderColor = useColor("border.border-secondary");
  const searchBgColor = useColor("surface.surface-l1");
  const iconColor = useColor("content.content-tertiary");
  const textColor = useColor("content.content-primary");
  const placeholderColor = useColor("content.content-tertiary");
  
  // Load more button colors
  const loadMoreBgColor = useColor("surface.surface-l1");
  const loadMoreTextColor = useColor("content.content-brand");
  const loadMoreHoverBgColor = useColor("background.background-brand");
  const loadMoreBorderColor = useColor("border.border-brand");

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return blogPosts;
    
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Posts to display (with pagination)
  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, visiblePosts);
  }, [filteredPosts, visiblePosts]);

  // Check if there are more posts to load
  const hasMorePosts = filteredPosts.length > visiblePosts;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisiblePosts(prev => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  const handleSearchClick = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!searchTerm.trim()) {
      setIsSearchExpanded(false);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsSearchExpanded(false);
    setVisiblePosts(6); // Reset pagination
  };

  const handlePostClick = (postId: number) => {
    // Navigate to blog post detail - implement your navigation logic here
    console.log('Navigate to post:', postId);
  };

  return (
    <BlogSectionContainer $bgColor={bgColor}>
      <BlogContent>
        <BlogHeader>
          <BlogTitle $textColor={titleColor}>
            Our blog
          </BlogTitle>
          
          <SearchContainer
            $isExpanded={isSearchExpanded}
            $borderColor={borderColor}
            $bgColor={searchBgColor}
            onClick={!isSearchExpanded ? handleSearchClick : undefined}
            initial={false}
            animate={{
              width: isSearchExpanded ? 400 : 48,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SearchIcon
              $isExpanded={isSearchExpanded}
              $iconColor={iconColor}
            >
              <MagnifyingGlass />
            </SearchIcon>
            
            {isSearchExpanded && (
              <SearchInput
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={handleSearchBlur}
                autoFocus
                $textColor={textColor}
                $placeholderColor={placeholderColor}
              />
            )}
            
            {isSearchExpanded && searchTerm && (
              <ClearButton
                onClick={handleClearSearch}
                $iconColor={iconColor}
                type="button"
              >
                <X />
              </ClearButton>
            )}
          </SearchContainer>
        </BlogHeader>

        {displayedPosts.length > 0 ? (
          <>
            <MasonryGrid>
              {displayedPosts.map((post) => (
                <BlogCardComponent
                  key={post.id}
                  post={post}
                  onClick={() => handlePostClick(post.id)}
                />
              ))}
            </MasonryGrid>
            
            {hasMorePosts && (
              <LoadMoreContainer>
                <LoadMoreButton
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  $bgColor={loadMoreBgColor}
                  $textColor={loadMoreTextColor}
                  $hoverBgColor={loadMoreHoverBgColor}
                  $borderColor={loadMoreBorderColor}
                >
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      Load more
                      <ArrowDown />
                    </>
                  )}
                </LoadMoreButton>
              </LoadMoreContainer>
            )}
          </>
        ) : (
          <NoResultsContainer>
            <NoResultsIcon $iconColor={iconColor}>
              <FileText />
            </NoResultsIcon>
            <NoResultsText $textColor={textColor}>
              No articles found for "{searchTerm}"
            </NoResultsText>
          </NoResultsContainer>
        )}
      </BlogContent>
    </BlogSectionContainer>
  );
}
