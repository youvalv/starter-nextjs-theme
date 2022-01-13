// NOTE This file is auto-generated by the Contentlayer CLI

export { isType } from 'contentlayer/client';

export interface ContentlayerGenTypes {
    documentTypes: DocumentTypes;
    documentTypeMap: DocumentTypeMap;
    documentTypeNames: DocumentTypeNames;
    nestedTypes: NestedTypes;
    nestedTypeMap: NestedTypeMap;
    nestedTypeNames: NestedTypeNames;
    allTypeNames: AllTypeNames;
}

declare global {
    interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
    Config: Config;
    PageLayout: PageLayout;
    Person: Person;
    PostFeedLayout: PostFeedLayout;
    PostLayout: PostLayout;
};

export type NestedTypeMap = {
    Badge: Badge;
    Button: Button;
    CheckboxFormControl: CheckboxFormControl;
    ContactBlock: ContactBlock;
    ContactSection: ContactSection;
    CtaSection: CtaSection;
    EmailFormControl: EmailFormControl;
    FaqItem: FaqItem;
    FaqSection: FaqSection;
    FeaturedItem: FeaturedItem;
    FeaturedItemsSection: FeaturedItemsSection;
    FeaturedPeopleSection: FeaturedPeopleSection;
    FeaturedPostsSection: FeaturedPostsSection;
    FeatureHighlightSection: FeatureHighlightSection;
    Footer: Footer;
    FormBlock: FormBlock;
    Header: Header;
    HeroSection: HeroSection;
    ImageBlock: ImageBlock;
    JobList: JobList;
    JobListItem: JobListItem;
    JobsSection: JobsSection;
    Link: Link;
    MediaGallerySection: MediaGallerySection;
    PagedPostsSection: PagedPostsSection;
    QuoteSection: QuoteSection;
    RecentPostsSection: RecentPostsSection;
    SelectFormControl: SelectFormControl;
    Social: Social;
    Styles: Styles;
    Testimonial: Testimonial;
    TestimonialsSection: TestimonialsSection;
    TextareaFormControl: TextareaFormControl;
    TextFormControl: TextFormControl;
    VideoBlock: VideoBlock;
};

export type AllTypes = DocumentTypes | NestedTypes;
export type AllTypeNames = DocumentTypeNames | NestedTypeNames;

export type DocumentTypes = Config | PageLayout | Person | PostFeedLayout | PostLayout;
export type DocumentTypeNames = 'Config' | 'PageLayout' | 'Person' | 'PostFeedLayout' | 'PostLayout';

export type NestedTypes =
    | Badge
    | Button
    | CheckboxFormControl
    | ContactBlock
    | ContactSection
    | CtaSection
    | EmailFormControl
    | FaqItem
    | FaqSection
    | FeaturedItem
    | FeaturedItemsSection
    | FeaturedPeopleSection
    | FeaturedPostsSection
    | FeatureHighlightSection
    | Footer
    | FormBlock
    | Header
    | HeroSection
    | ImageBlock
    | JobList
    | JobListItem
    | JobsSection
    | Link
    | MediaGallerySection
    | PagedPostsSection
    | QuoteSection
    | RecentPostsSection
    | SelectFormControl
    | Social
    | Styles
    | Testimonial
    | TestimonialsSection
    | TextareaFormControl
    | TextFormControl
    | VideoBlock;
export type NestedTypeNames =
    | 'Badge'
    | 'Button'
    | 'CheckboxFormControl'
    | 'ContactBlock'
    | 'ContactSection'
    | 'CtaSection'
    | 'EmailFormControl'
    | 'FaqItem'
    | 'FaqSection'
    | 'FeaturedItem'
    | 'FeaturedItemsSection'
    | 'FeaturedPeopleSection'
    | 'FeaturedPostsSection'
    | 'FeatureHighlightSection'
    | 'Footer'
    | 'FormBlock'
    | 'Header'
    | 'HeroSection'
    | 'ImageBlock'
    | 'JobList'
    | 'JobListItem'
    | 'JobsSection'
    | 'Link'
    | 'MediaGallerySection'
    | 'PagedPostsSection'
    | 'QuoteSection'
    | 'RecentPostsSection'
    | 'SelectFormControl'
    | 'Social'
    | 'Styles'
    | 'Testimonial'
    | 'TestimonialsSection'
    | 'TextareaFormControl'
    | 'TextFormControl'
    | 'VideoBlock';

/** Document types */
export type Config = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Config';
    favicon: string;
    header: Header | undefined;
    footer: Footer | undefined;
};

export type PageLayout = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'PageLayout';
    title: string;
    sections: (
        | RecentPostsSection
        | FeaturedPeopleSection
        | HeroSection
        | CtaSection
        | QuoteSection
        | FaqSection
        | MediaGallerySection
        | JobsSection
        | ContactSection
        | FeaturedPostsSection
        | FeatureHighlightSection
        | FeaturedItemsSection
        | TestimonialsSection
    )[];
    /** string file body */
    body: string;
    slug: string;
};

export type Person = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Person';
    firstName: string;
    lastName: string;
    role: string;
    bio: string;
    image: ImageBlock;
    /** string file body */
    body: string;
    slug: string;
};

export type PostFeedLayout = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'PostFeedLayout';
    title: string;
    /** set to 0 to show all posts on a single page */
    numOfPostsPerPage: number;
    postFeed: PagedPostsSection;
    topSections:
        | (
              | RecentPostsSection
              | FeaturedPeopleSection
              | HeroSection
              | CtaSection
              | QuoteSection
              | FaqSection
              | MediaGallerySection
              | JobsSection
              | ContactSection
              | FeaturedPostsSection
              | FeatureHighlightSection
              | FeaturedItemsSection
              | TestimonialsSection
          )[]
        | undefined;
    bottomSections:
        | (
              | RecentPostsSection
              | FeaturedPeopleSection
              | HeroSection
              | CtaSection
              | QuoteSection
              | FaqSection
              | MediaGallerySection
              | JobsSection
              | ContactSection
              | FeaturedPostsSection
              | FeatureHighlightSection
              | FeaturedItemsSection
              | TestimonialsSection
          )[]
        | undefined;
    styles: Styles;
    /** string file body */
    body: string;
};

export type PostLayout = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'PostLayout';
    title: string;
    date: string;
    author: Person | undefined;
    category: any | undefined;
    excerpt: string;
    featuredImage: ImageBlock;
    bottomSections:
        | (
              | RecentPostsSection
              | FeaturedPeopleSection
              | HeroSection
              | CtaSection
              | QuoteSection
              | FaqSection
              | MediaGallerySection
              | JobsSection
              | ContactSection
              | FeaturedPostsSection
              | FeatureHighlightSection
              | FeaturedItemsSection
              | TestimonialsSection
          )[]
        | undefined;
    /** string file body */
    markdown_content: string;
    slug: string;
};

/** Nested types */
export type Badge = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Badge';
    label: string | undefined;
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    styles: Styles | undefined;
};

export type Button = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Button';
    label: string;
    /** The alternative text for screen readers */
    altText: string;
    url: string;
    showIcon: boolean;
    icon:
        | 'apple'
        | 'arrowLeft'
        | 'arrowLeftCircle'
        | 'arrowRight'
        | 'arrowRightCircle'
        | 'cart'
        | 'chevronLeft'
        | 'chevronRight'
        | 'facebook'
        | 'github'
        | 'googlePlay'
        | 'instagram'
        | 'linkedin'
        | 'mail'
        | 'play'
        | 'playCircle'
        | 'reddit'
        | 'send'
        | 'twitter'
        | 'vimeo'
        | 'youtube';
    iconPosition: 'left' | 'right';
    style: 'primary' | 'secondary';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
};

export type CheckboxFormControl = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'CheckboxFormControl';
    name: string | undefined;
    label: string | undefined;
    isRequired: boolean | undefined;
    width: 'full' | '1/2' | undefined;
};

export type ContactBlock = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'ContactBlock';
    phoneNumber: string;
    phoneAltText: string;
    email: string;
    emailAltText: string;
    address: string;
    addressAltText: string;
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
};

export type ContactSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'ContactSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    backgroundSize: 'full' | 'inset';
    title: string | undefined;
    text: string | undefined;
    form: FormBlock;
    media: ImageBlock | VideoBlock | undefined;
    styles: Styles;
};

export type CtaSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'CtaSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    backgroundSize: 'full' | 'inset';
    title: string | undefined;
    text: string | undefined;
    actions: (Button | Link)[];
    backgroundImage: ImageBlock | undefined;
    styles: Styles;
};

export type EmailFormControl = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'EmailFormControl';
    name: string | undefined;
    label: string | undefined;
    hideLabel: boolean | undefined;
    placeholder: string | undefined;
    isRequired: boolean | undefined;
    width: 'full' | '1/2' | undefined;
};

export type FaqItem = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FaqItem';
    question: string;
    answer: string;
    styles: Styles;
};

export type FaqSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FaqSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    title: string | undefined;
    subtitle: string | undefined;
    actions: (Button | Link)[];
    items: FaqItem[];
    styles: Styles;
};

export type FeaturedItem = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FeaturedItem';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    title: string;
    subtitle: string;
    text: string;
    featuredImage: ImageBlock;
    actions: (Button | Link)[] | undefined;
    enableHover: boolean;
    styles: Styles;
};

export type FeaturedItemsSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FeaturedItemsSection';
    title: string;
    subtitle: string;
    items: FeaturedItem[];
    actions: (Button | Link)[];
    columns: number;
    enableHover: boolean;
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    styles: Styles;
};

export type FeaturedPeopleSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FeaturedPeopleSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    variant: 'variant-a' | 'variant-b' | 'variant-c' | undefined;
    title: string | undefined;
    subtitle: string | undefined;
    actions: (Button | Link)[] | undefined;
    people: string[] | undefined;
    styles: Styles;
};

export type FeaturedPostsSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FeaturedPostsSection';
    title: string | undefined;
    subtitle: string | undefined;
    showDate: boolean;
    showAuthor: boolean;
    showExcerpt: boolean;
    variant: 'variant-a' | 'variant-b' | 'variant-c';
    actions: (Button | Link)[];
    styles: Styles;
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    posts: string[];
};

export type FeatureHighlightSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FeatureHighlightSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    backgroundSize: 'full' | 'inset';
    title: string;
    subtitle: string;
    badge: Badge | undefined;
    text: string;
    actions: (Button | Link)[];
    media: ImageBlock | VideoBlock;
    styles: Styles;
};

export type Footer = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Footer';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    logo: ImageBlock;
    title: string;
    text: string | undefined;
    contacts: ContactBlock;
    copyrightText: string;
    primaryLinks: (Link | Button)[];
    socialLinks: Social[];
    legalLinks: (Link | Button)[];
    styles: Styles;
};

export type FormBlock = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'FormBlock';
    variant: 'variant-a' | 'variant-b';
    fields:
        | (TextFormControl | EmailFormControl | CheckboxFormControl | SelectFormControl | TextareaFormControl)[]
        | undefined;
    submitLabel: string | undefined;
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    action: string | undefined;
    destination: string | undefined;
    styles: Styles | undefined;
};

export type Header = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Header';
    headerVariant: 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d' | 'variant-e';
    primaryColors:
        | 'colors-a'
        | 'colors-b'
        | 'colors-c'
        | 'colors-d'
        | 'colors-e'
        | 'colors-f'
        | 'colors-g'
        | 'colors-h';
    secondaryColors:
        | 'colors-a'
        | 'colors-b'
        | 'colors-c'
        | 'colors-d'
        | 'colors-e'
        | 'colors-f'
        | 'colors-g'
        | 'colors-h';
    title: string;
    isTitleVisible: boolean;
    logo: ImageBlock;
    primaryLinks: (Link | Button)[];
    secondaryLinks: (Link | Button)[];
    styles: Styles;
};

export type HeroSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'HeroSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    title: string;
    subtitle: string;
    badge: Badge | undefined;
    text: string;
    actions: (Button | Link)[];
    media: FormBlock | ImageBlock | VideoBlock;
    styles: Styles;
};

export type ImageBlock = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'ImageBlock';
    /** The URL of the image */
    url: string;
    /** The alternative text for screen readers */
    altText: string;
    /** The caption of the timage */
    caption: string;
    styles: Styles;
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
};

export type JobList = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'JobList';
    title: string | undefined;
    items: JobListItem[] | undefined;
};

export type JobListItem = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'JobListItem';
    title: string | undefined;
    location: string | undefined;
    text: string | undefined;
    actions: (Button | Link)[] | undefined;
};

export type JobsSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'JobsSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    title: string | undefined;
    subtitle: string | undefined;
    jobLists: JobList[] | undefined;
    styles: Styles;
};

export type Link = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Link';
    label: string;
    /** The alternative text for screen readers */
    altText: string;
    url: string;
    showIcon: boolean;
    icon:
        | 'apple'
        | 'arrowLeft'
        | 'arrowLeftCircle'
        | 'arrowRight'
        | 'arrowRightCircle'
        | 'cart'
        | 'chevronLeft'
        | 'chevronRight'
        | 'facebook'
        | 'github'
        | 'googlePlay'
        | 'instagram'
        | 'linkedin'
        | 'mail'
        | 'play'
        | 'playCircle'
        | 'reddit'
        | 'send'
        | 'twitter'
        | 'vimeo'
        | 'youtube';
    iconPosition: 'left' | 'right';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
};

export type MediaGallerySection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'MediaGallerySection';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    title: string | undefined;
    subtitle: string | undefined;
    images: ImageBlock[] | undefined;
    spacing: number;
    columns: number;
    aspectRatio: '1:1' | '3:2' | '2:3' | '4:3' | '3:4' | '16:9' | 'auto';
    imageSizePx: number;
    showCaption: boolean;
    enableHover: boolean;
    styles: Styles;
};

export type PagedPostsSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'PagedPostsSection';
    title: string | undefined;
    subtitle: string | undefined;
    showDate: boolean;
    showAuthor: boolean;
    showExcerpt: boolean;
    variant: 'variant-a' | 'variant-b' | 'variant-c';
    actions: (Button | Link)[];
    styles: Styles;
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
};

export type QuoteSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'QuoteSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    quote: string;
    name: string | undefined;
    title: string | undefined;
    backgroundImage: ImageBlock | undefined;
    styles: Styles;
};

export type RecentPostsSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'RecentPostsSection';
    title: string;
    subtitle: string;
    showDate: boolean;
    showAuthor: boolean;
    showExcerpt: boolean;
    variant: 'variant-a' | 'variant-b' | 'variant-c';
    actions: (Button | Link)[];
    styles: Styles;
    colors: string;
    recentCount: number;
};

export type SelectFormControl = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'SelectFormControl';
    name: string | undefined;
    label: string | undefined;
    hideLabel: boolean | undefined;
    defaultValue: string | undefined;
    options: string[] | undefined;
    isRequired: boolean | undefined;
    width: 'full' | '1/2' | undefined;
};

export type Social = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Social';
    label: string;
    altText: string;
    url: string;
    icon: 'facebook' | 'github' | 'instagram' | 'linkedin' | 'reddit' | 'twitter' | 'vimeo' | 'youtube';
    style: 'link' | 'primary' | 'secondary';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
};

export type Styles = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Styles';
    self: any | undefined;
    title: any | undefined;
    text: any | undefined;
    subtitle: any | undefined;
    actions: any | undefined;
    quote: any | undefined;
    name: any | undefined;
    answer: any | undefined;
    submitLabel: any | undefined;
    question: any | undefined;
};

export type Testimonial = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'Testimonial';
    quote: string;
    name: string | undefined;
    title: string | undefined;
    image: ImageBlock | undefined;
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    styles: Styles | undefined;
};

export type TestimonialsSection = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'TestimonialsSection';
    colors: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f' | 'colors-g' | 'colors-h';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
    variant: 'variant-a' | 'variant-b' | 'variant-c';
    title: string | undefined;
    subtitle: string | undefined;
    testimonials: Testimonial[];
    styles: Styles;
};

export type TextareaFormControl = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'TextareaFormControl';
    name: string | undefined;
    label: string | undefined;
    hideLabel: boolean | undefined;
    placeholder: string | undefined;
    isRequired: boolean | undefined;
    width: 'full' | '1/2' | undefined;
};

export type TextFormControl = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'TextFormControl';
    name: string | undefined;
    label: string | undefined;
    hideLabel: boolean | undefined;
    placeholder: string | undefined;
    isRequired: boolean | undefined;
    width: 'full' | '1/2' | undefined;
};

export type VideoBlock = {
    /** File path relative to `contentDirPath` */
    _id: string;
    type: 'VideoBlock';
    title: string | undefined;
    url: string | undefined;
    autoplay: boolean;
    loop: boolean;
    muted: boolean;
    controls: boolean;
    aspectRatio: '4:3' | '16:9';
    /** The unique ID for an HTML element, must not contain whitespace */
    elementId: string;
};