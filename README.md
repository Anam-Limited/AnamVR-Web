## 🧾 Editable Sections Documentation

This project contains several dynamic sections that can be easily extended via the codebase. Here’s how you can update or add to them:

- **Testimonials**

Location: `components/Testimonial.tsx` for main-page (anamvr.com)
Location: `components/ForIndividuals.tsx` testimonials for the app (anamvr.com/for-individuals)
Location: `components/ForOrganisations.tsx` testimonials for the business-app (anamvr.com/for-organisations)

The testimonials are defined as an array of objects inside the component. Each object includes:

```tsx
{
  quote: "The testimonial message.",
  name: "Person's Name",
  title: "Person's Title",
}
```

To **add a new testimonial**, simply append another object with the above structure to the array.

- **Blog Posts**

  - Location: `data/blogPost.ts`
  - Structure Example:
    ```ts
    {
      id: "exploring-virtual-reality",
      title: "Exploring Virtual Reality Therapy: Revolutionising Mental Health Treatment"
      excerpt: "Discover how VR therapy is transforming mental health by making treatment immersive, effective, and accessible for anxiety, PTSD, and more."
      author: "Rob Sheridan"
      date: "November 18, 2024"
      readTime: "7 min"
      category: "VR Therapy"
      tags: ["Virtual Reality", "Mental Health", "Anxiety", "Innovation"]
      image: "/blogs/images/exploring-virtual-reality.jpg"
    }
    ```
  - Add a new blog post by appending a new object to the exported array.
  - Add images under public/blog/images for blogs.

- **FAQs**
  - Location: `components/Questions.tsx`
  - An array of:
    ```ts
    {
      question: string;
      answer: string;
    }
    ```
- **Chat Questions**

  - Location: `data/chatquestions.ts`
  - Structure Example:
    ```ts
    {
      question: string;
      answer: string;
      category: Category;
      relatedQuestions?: string[];
    }
    ```
  - These questions are used by the chatbot to guide users through various support topics. Add new entries by appending to the exported array.

- (For my purpose)
  npm run build
  firebase deploy --only hosting
