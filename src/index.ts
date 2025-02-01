const ROLES = {
  admin: [
    "view: comments",
    "create: comments",
    "update: comments",
    "delete: comments",
  ],
  moderator: ["view: comments", "create: comments", "delete: comments"],
  user: ["view: comments", "create: comments"],
} as const;

type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];

export function hasPermission(
  user: { id: string; role: Role },
  permission: Permission
): boolean {
  //   return (ROLES[user.role] as readonly Permission[]).includes(permission);
  return true;
}
console.log(typeof ROLES);
