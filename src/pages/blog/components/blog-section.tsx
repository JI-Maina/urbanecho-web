import {
  BlogMasonryArticles,
  BlogHeader,
  BlogSectionContainer,
  BlogSectionContent,
  BlogItemContainer,
  BlogsContainer,
  LoadMoreButtonContainer,
  SearchWrapper,
  SearchButton,
  SearchInput,
} from "./blog-section.styled";
import { useColor } from "@/providers/theme-provider";
import Button from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState, useRef } from "react";

type BlogKeys = "left" | "center" | "right";
type BlogPostType = {
  title: string;
  tag: string;
  date: string;
  height: string;
  thumbnail: string;
};

type BlogsType = Record<BlogKeys, BlogPostType[]>;

const blogs: BlogsType = {
  left: [
    {
      title: "How Accra Mapped Its Future Transport Network",
      tag: "Case Study",
      date: "August 30, 2025",
      height: "360px",
      thumbnail: "/images/kofi-bhavnani-4c-k7vendbg-unsplash.jpg",
    },
    {
      title: "A Planner's Guide to Synthetic Population Modelling",
      tag: "How-To",
      date: "August 30, 2025",
      height: "240px",
      thumbnail: "/images/alex-shuper-bkTH9QrJdFo-unsplash.jpg",
    },
    {
      title: "Why Human Behaviour is the Heart of Urban Tech",
      tag: "Vision",
      date: "August 30, 2025",
      height: "320px",
      thumbnail: "/images/levi-guzman-zdSoe8za6Hs-unsplash.jpg",
    },
    {
      title: "Beyond the Map: The Rise of Digital Urban Twins",
      tag: "Innovation",
      date: "August 30, 2025",
      height: "440px",
      thumbnail: "/images/danielle-suijkerbuijk-3lhweEF3nQQ-unsplash.jpg",
    },
  ],
  center: [
    {
      title: "The Data Behind Bogotá's Urban Resilience Strategy",
      tag: "Analysis",
      date: "August 30, 2025",
      height: "240px",
      thumbnail: "/images/random-institute-GkacI-_mGlg-unsplash.jpg",
    },
    {
      title: "Jakarta's Digital Twin: A Five-Month Journey",
      tag: "Case Study",
      date: "August 30, 2025",
      height: "440px",
      thumbnail: "/images/gints-gailis-dn8xoYmzLZg-unsplash.jpg",
    },
    {
      title: "The Ethical Imperative of AI in City Planning",
      tag: "Opinion",
      date: "August 30, 2025",
      height: "176px",
      thumbnail: "/images/google-deepmind-XEfyYsUMdR4-unsplash.jpg",
    },
    {
      title: "Measuring Social Equity Through Urban Data Metrics",
      tag: "How-To",
      date: "August 30, 2025",
      height: "320px",
      thumbnail: "/images/19354.jpg",
    },
    {
      title: "From Static Plans to Living, Breathing Cities",
      tag: "Vision",
      date: "August 30, 2025",
      height: "240px",
      thumbnail: "/images/brainstorming_session.png",
    },
  ],
  right: [
    {
      title: "From Static Plans to Living, Breathing Cities",
      tag: "Analysis",
      date: "August 30, 2025",
      height: "360px",
      thumbnail: "/images/alina-grubnyak-ZiQkhI7417A-unsplash.jpg",
    },
    {
      title: "Introducing the Concept of a Scenario Marketplace",
      tag: "Innovation",
      date: "August 30, 2025",
      height: "240px",
      thumbnail: "/images/igor-omilaev-B3u8bcGYMOY-unsplash.jpg",
    },
    {
      title: `Ask the Right "What-If" Questions for Your City`,
      tag: "How-To",
      date: "August 30, 2025",
      height: "440px",
      thumbnail: "/images/fernando-santander-yjWjLmv13FI-unsplash.jpg",
    },
    {
      title: `São Paulo's Master Plan: A Digital First Approach`,
      tag: "Case Study",
      date: "August 30, 2025",
      height: "440px",
      thumbnail: "/images/vitor-mendes-stafusa-o3jiiES00cI-unsplash.jpg",
    },
  ],
};

export default function BlogSection() {
  const colors = {
    cardBorder: useColor("border.border-tertiary"),
    pageBackground: useColor("surface.surface-l0"),
    tagBackground: useColor("background.background-selected"),
    tagTextColor: useColor("content.content-brand"),
    titleColor: useColor("content.content-primary"),
    dateColor: useColor("content.content-tertiary"),
    blogContainerBg: useColor("surface.surface-l0"),
  };
  return (
    <BlogSectionContainer bgColor={colors.pageBackground}>
      <BlogSectionContent>
        <BlogHeaderWithSearch />
        <BlogMasonryArticles>
          {Object.keys(blogs).map((key) => (
            <BlogsContainer key={key}>
              {blogs[key as BlogKeys].map((blog, index) => (
                <BlogItemContainer
                  key={index}
                  borderColor={colors.cardBorder}
                  $tagBgColor={colors.tagBackground}
                  $tagTextColor={colors.tagTextColor}
                  $dateColor={colors.dateColor}
                  $titleColor={colors.titleColor}
                  $blogContainerBg={colors.blogContainerBg}
                >
                  <img
                    src={blog.thumbnail}
                    alt=""
                    style={{ height: blog.height, width: "100%" }}
                  />
                  <div className="content">
                    <div className="tag-container">
                      <span>{blog.tag}</span>
                    </div>
                    <h2>{blog.title}</h2>
                    <p>{blog.date}</p>
                  </div>
                </BlogItemContainer>
              ))}
            </BlogsContainer>
          ))}
        </BlogMasonryArticles>
        <LoadMoreButtonContainer>
          <Button variant="primary" size="large">
            Load More
          </Button>
        </LoadMoreButtonContainer>
      </BlogSectionContent>
    </BlogSectionContainer>
  );
}

function BlogHeaderWithSearch() {
  const [query, setQuery] = useState("");
  const [isSearchActive, setSearchActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = query.trim();

  const searchColors = {
    borderColor: useColor("border.border-subtle"),
    textColor: useColor("content.content-tertiary"),
    inputTextColor: useColor("content.content-primary"),
    placeholderColor: useColor("content.content-tertiary"),
  };

  const handleFocusSearch = () => {
    setSearchActive(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleBlurSearch = () => {
    // Only retract if there's no query
    if (!normalizedQuery) {
      setSearchActive(false);
    }
  };

  return (
    <BlogHeader>
      <h2>Our Blog</h2>
      <SearchWrapper 
        $isActive={isSearchActive} 
        $hasQuery={!!normalizedQuery}
        $borderColor={searchColors.borderColor}
      >
        <SearchButton
          type="button"
          aria-label="Search blog posts"
          onClick={handleFocusSearch}
          onFocus={handleFocusSearch}
          $textColor={searchColors.textColor}
        >
          <MagnifyingGlassIcon size={20} />
        </SearchButton>
        <SearchInput
          ref={searchInputRef}
          type="search"
          placeholder="Search posts"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSearchActive(true);
          }}
          onFocus={() => setSearchActive(true)}
          onBlur={handleBlurSearch}
          $isActive={isSearchActive}
          $hasQuery={!!normalizedQuery}
          $textColor={searchColors.inputTextColor}
          $placeholderColor={searchColors.placeholderColor}
        />
      </SearchWrapper>
    </BlogHeader>
  );
}
