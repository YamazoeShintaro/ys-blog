import { UserResponse } from "@/components/types/Response";

export async function getUserData() {
  const UserData: UserResponse = await fetch("https://api.github.com/users/YamazoeShintaro", {
    headers: {"Authorization": `token ${process.env.GITHUB_TOKEN}`},
    cache: "force-cache",
  })
    .then(res => {
        return res.json();
    })
    .catch(err => {
        console.log(err);
    });
  return UserData;
};