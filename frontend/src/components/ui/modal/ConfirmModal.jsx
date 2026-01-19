"use client";

import { X } from "lucide-react";
import Btn from "@/components/ui/button/Btn";

export default function ConfirmModal({
  open = false,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Delete",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="
            w-full max-w-md
            rounded-xl bg-white
            shadow-xl
            overflow-hidden
            animate-in fade-in zoom-in-95
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h3 className="text-base font-semibold text-gray-900">
              {title}
            </h3>

            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="px-5 py-6 text-sm text-gray-600 leading-relaxed">
            {message}
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-3 px-5 py-4 border-t bg-gray-50">
            <Btn
              text={cancelText}
              onClick={onCancel}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            />

            <Btn
              text={confirmText}
              loadingText="Processing..."
              loading={loading}
              onClick={onConfirm}
              className="bg-red-600 text-white hover:bg-red-700"
            />
          </div>
        </div>
      </div>
    </>
  );
}
