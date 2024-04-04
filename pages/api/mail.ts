// import axios, { AxiosResponse } from 'axios';

// interface BlogPost {
//   title: string;
//   description: string;
//   date: string;
//   url: string;
// }

// // Mailchimp API Configuration
// // const apiKey = 'YOUR_MAILCHIMP_API_KEY'; // Replace with your Mailchimp API key
// // const listId = 'YOUR_MAILCHIMP_LIST_ID'; // Replace with your Mailchimp List ID

// const apiKey = "bb83112604c76d53aacd328669980ff4-us13";
// const listId = "69a9463d1d";

// // RSS Feed URL
// const rssFeedUrl = 'http://anhkolamgidauanhthe.blog/rss'; // Replace with your blog's RSS feed URL

// // Function to fetch latest blog posts from the RSS feed
// async function fetchLatestBlogPosts(): Promise<BlogPost[]> {
//   try {
//     const response: AxiosResponse = await axios.get(rssFeedUrl);
//     console.log("response",response)
//     const latestPosts: BlogPost[] = response.data; // Fetch the latest 5 blog posts, you can adjust this number
//     return latestPosts;
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     return [];
//   }
// }

// // Function to create a Mailchimp email campaign
// async function createMailchimpCampaign(posts: BlogPost[]): Promise<string | null> {
//   try {
//     const mailchimpData = {
//       type: 'regular',
//       recipients: {
//         list_id: listId,
//       },
//       settings: {
//         subject_line: 'Latest Blog Posts from My Blog',
//         title: 'Latest Blog Posts',
//         from_name: 'Your Name',
//         reply_to: 'khiem20tc@mgmail.com', // Replace with your email address
//       },
//       content_type: 'template',
//       template: {
//         id: '10038490', // Replace with your Mailchimp email template ID
//       },
//       // variate_settings: {
//       //   winner_criteria: 'opens',
//       //   wait_time: 24,
//       // },
//     };

//     const response: AxiosResponse = await axios.post(
//       `https://us13.api.mailchimp.com/3.0/campaigns`,
//       mailchimpData,
//       {
//         auth: {
//           username: 'khiem20tc', // The Mailchimp API requires any non-empty string as the username
//           password: apiKey,
//         },
//       }
//     );

//     return response.data.id;
//   } catch (error) {
//     console.error('Error creating Mailchimp campaign:', error);
//     console.log("error list",error.response.data.errors)
//     return null;
//   }
// }

// // Function to send the latest blog posts as content for the Mailchimp campaign
// async function sendCampaignContent(campaignId: string, posts: BlogPost[]): Promise<boolean> {
//   try {
//     let emailBody = '<h1>Latest Blog Posts</h1>';

//     // posts.forEach((post) => {
//     //   emailBody += `<p><a href="${post.url}">${post.title}</a></p>`;
//     // });
//     emailBody += `<p>${posts}</p>`

//     const response: AxiosResponse = await axios.put(
//       `https://us13.api.mailchimp.com/3.0/campaigns/${campaignId}/content`,
//       {
//         html: emailBody,
//       },
//       {
//         auth: {
//           username: 'khiem20tc',
//           password: apiKey,
//         },
//       }
//     );

//     return response.status === 200;
//   } catch (error) {
//     console.error('Error sending campaign content:', error);
//     return false;
//   }
// }

// async function main() {
//   try {
//     const latestPosts: BlogPost[] = await fetchLatestBlogPosts();
//     if (latestPosts.length > 0) {
//       const campaignId: string | null = await createMailchimpCampaign(latestPosts);
//       if (campaignId) {
//         const contentSent: boolean = await sendCampaignContent(campaignId, latestPosts);
//         if (contentSent) {
//           console.log('Email campaign sent successfully!');
//         }
//       }
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// main();
