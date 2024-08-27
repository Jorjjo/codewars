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

  let newObj = {
    online: onlineUsers,
    offline: offlineUsers,
    away: awayUsers,
  };

  return newObj;
};

console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
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
    {
      username: "Jojjo",
      status: "online",
      lastActivity: 8,
    },
  ])
);
