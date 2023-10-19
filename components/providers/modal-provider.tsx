"use client";

import CreateChannelModal from "@/components/modals/create-channel-modal";
import DeleteServerModal from "@/components/modals/delete-server-modal";
import EditServerModal from "@/components/modals/edit-server-modal";
import InviteModal from "@/components/modals/invite-modal";
import LeaveServerModal from "@/components/modals/leave-server-modal";
import MemberModal from "@/components/modals/member-modal";
import ServerModal from "@/components/modals/server-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <ServerModal />
      <InviteModal />
      <EditServerModal />
      <MemberModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
};

export default ModalProvider;
