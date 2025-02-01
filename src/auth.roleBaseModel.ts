const ROLES = {
  admin: [
    "view: comments",
    "create: comments",
    "update: comments",
    "delete: comments",
  ],
  moderator: [
    "view: comments",
    "create: comments",
    "update: ownComments",
    "delete: comments",
  ],
  user: [
    "view: comments",
    "create: comments",
    "update: ownComments",
    "delete: own Comments",
  ],
} as const;

type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];
type User = {
  id: string;
  role: Role;
};

function hasPermission(
  user: { id: string; role: Role },
  permission: Permission
): boolean {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
}

export { Permission, User, hasPermission };
