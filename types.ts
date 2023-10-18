import { Member, Server, Profile } from "@prisma/client";

export type ServerWithMemberProfile = Server & {
  member: (Member & { profile: Profile })[];
};
