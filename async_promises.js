//Simulate Fetching User Data
function fetchUserData(UserID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (UserID > 0) {
            resolve({
                id: UserID,
                name: 'John Doe',
                email: `user${UserID}@example.com`,
                registrationDate: new Date().toISOString()
            });
      } else {
        reject(new Error("Invalid user ID. Must be greater than 0."));
      }
    }, 1500);
  });
}

   
// 2. Generate HTML with Template Literals

function generateUserHTML(user) {
  return `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Registered on: ${new Date(user.registrationDate).toLocaleDateString()}</p>
    </div>
  `;
}

// 3. Simulate Fetching User Posts
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve([
          { id: 1, title: "Post One", content: "This is the first post.", userId },
          { id: 2, title: "Post Two", content: "This is the second post.", userId }
        ]);
      } else {
        reject(new Error("User ID not found for posts."));
      }
    }, 1000);
  });
}

// 4. Chain Promises to Combine User and Posts

function getUserWithPosts(userId) {
  return fetchUserData(userId)
    .then(user => {
      return fetchUserPosts(userId).then(posts => {
        return { user, posts };
      });
    })
    .catch(error => {
      console.error("Error in Promise chain:", error.message);
      throw error;
    });
}
 // 5. Async/Await Version with Logging

async function getUserWithPostsAsync(userId) {
  try {
    console.log("Fetching user...");
    const user = await fetchUserData(userId);
    console.log("User fetched:", user);

    console.log("Fetching posts...");
    const posts = await fetchUserPosts(userId);
    console.log("Posts fetched:", posts);

    return { user, posts };
  } catch (error) {
    console.error("Async/Await Error:", error.message);
    throw error;
  }
}
    // 6. Fetch Multiple Users in Parallel

async function fetchMultipleUsers(userIds) {
  const promises = userIds.map(id =>
    fetchUserData(id).catch(error => {
      console.warn(`Failed to fetch user ${id}:`, error.message);
      return null;
    })
  );

  const results = await Promise.all(promises);
  return results.filter(user => user !== null);
}
  // 7. Fetch Users and Their Posts in Parallel
// ==========================
async function fetchUsersAndPosts(userIds) {
  try {
    const users = await fetchMultipleUsers(userIds);

    const postPromises = users.map(user =>
      fetchUserPosts(user.id).then(posts => ({ ...user, posts }))
    );

    const usersWithPosts = await Promise.all(postPromises);
    return usersWithPosts;
  } catch (error) {
    console.error("Error fetching users and posts:", error.message);
    throw error;
  }
}
 // 8. Test Cases



// Test single user fetch
getUserWithPostsAsync(1).then(data => {
  console.log(" Single user + posts:", data);
  console.log(generateUserHTML(data.user));
});

// Test multiple user fetch
fetchMultipleUsers([1, 2, -1, 3]).then(users => {
  console.log(" Fetched users:", users);
});

// Test users and posts
fetchUsersAndPosts([1, 2]).then(data => {
  console.log(" Users with posts:", data);
});
