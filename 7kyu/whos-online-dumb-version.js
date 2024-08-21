// Given an input of an array of objects containing usernames, status and time since last activity (in mins),
// create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

const whosOnline = (friends) => {
  let onlineUsers = [];
  let offlineUsers = [];
  let awayUsers = [];

  for (const el of friends) {
    switch (true) {
      case el.status === "online" && el.lastActivity <= 10:
        onlineUsers.push(el.username);
        break;
      case el.status === "offline":
        offlineUsers.push(el.username);
        break;
      case el.status === "online" && el.lastActivity > 10:
        awayUsers.push(el.username);
        break;
    }
  }

  let newObj = {};
  if (onlineUsers.length > 0) newObj.online = onlineUsers;
  if (offlineUsers.length > 0) newObj.offline = offlineUsers;
  if (awayUsers.length > 0) newObj.away = awayUsers;

  return newObj;
};

console.log(
  whosOnline([
    {
      username: "David",
      status: "offline",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
    // {
    //   username: "Jojjo",
    //   status: "online",
    //   lastActivity: 8,
    // },
  ])
);
