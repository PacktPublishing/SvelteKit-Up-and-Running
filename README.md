# SvelteKit Up and Running

<a href="https://www.packtpub.com/product/sveltekit-up-and-running/9781804615485?utm_source=github&utm_medium=repository&utm_campaign=9781803235851"><img src="https://content.packt.com/B19024/cover_image_small.jpg" alt="" height="256px" align="right"></a>

This is the code repository for [SvelteKit Up and Running](https://www.packtpub.com/product/sveltekit-up-and-running/9781804615485?utm_source=github&utm_medium=repository&utm_campaign=9781803235851), published by Packt.

**Leverage the power of a next-generation web framework to build high-performance web apps with ease**

## What is this book about?

* This book covers the following exciting features:
* Overview of core technologies making SvelteKit possible
* Basic and advanced concepts behind SvelteKit's file-based routing
* Keep code organized with SvelteKit's handy data loading techniques
* Understand how to incorporate SEO and Accessibility best practices
* Easily deploy SvelteKit apps to various providers using adapters
* Cover various configuration and tooling options to optimize your app

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/180461548X) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>

## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
import bcrypt from 'bcrypt';
export const actions = {
  login: async ({request}) => {
    const form = await request.formData();
    const hash = bcrypt.hashSync(form.get('password'), 10);
    console.log(hash);
    console.log(crypto.randomUUID());
  }
}
```

**Following is what you need for this book:**
This book is for web developers aiming to enhance their SvelteKit skills. Whether you're selecting your first JavaScript framework or seeking to stand out among job applicants by adding the latest technology to your resume, this book is your ultimate guide to becoming a SvelteKit master. A solid understanding of HTML, CSS, JavaScript, and Svelte is a must.

With the following software and hardware list you can run all code files present in the book (Chapter 1-13).
### Software and Hardware List
| Chapter | Software required | OS required |
| -------- | ------------------------------------ | ----------------------------------- |
| 1-13 | SvelteKit 1.16.3 or higher | Windows, Mac OS X, and Linux |
| 1-13 | JS | Windows, Mac OS X, and Linux |
| 1-13 | HTML and CSS | Windows, Mac OS X, and Linux |

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://packt.link/1zRGE).

### Related products
* Svelte with Test-Driven Development [[Packt]](https://www.packtpub.com/product/svelte-with-test-driven-development/9781837638338?utm_source=github&utm_medium=repository&utm_campaign=) [[Amazon]](https://www.amazon.com/dp/1837638330)

* Full Stack Web Development with Remix [[Packt]](https://www.packtpub.com/product/full-stack-web-development-with-remix/9781801075299?utm_source=github&utm_medium=repository&utm_campaign=9781838826222) [[Amazon]](https://www.amazon.com/dp/1801075298)


## Get to Know the Author
**Dylan Hildenbrand** is a full-stack web developer with a penchant for understanding how things work. Over the past decade, that desire to know "how things work" has led Dylan to a robust skillset ranging from front and back-end development to database administration, Linux server administration, and automation of application deployments and testing procedures. Dylan graduated from Minot State University in 2012 with a degree in Computer Science.
When not proselytizing to strangers about switching to Linux or Vim, Dylan enjoys administering and automating his "homelab," playing video games, playing board games with his wife, wrestling with his two children, and writing about web development on his website.

**Note from the author:**

## Layout
This repository is broken up into two main folder. The first is the chapters/ directory where code samples for each chapter appear just as they do throughout the book. Of course, each chapter is organized into its own directory to simplify navigation. If you are following along with the book and would like to copy snippets instead of typing it out on your own, it is recommended to grab code from the appropriate file in each chapter.

The second directory of note is full_project/. This directory contains the entire project as it is built throughout the book. It should reflect the very last state of the project and so may not look exactly as the code does in earlier chapters of the book. If you have finished reading the book and are simply interested in playing with the concepts learned throughout the book, then this is the recommended playground.

## Getting Started
To get started, clone this repository into your preferred directory. Once done, you can browse files or install the full project by navigating to full_project/ and running `npm install` followed by `npm run dev` to start the application.
