const NotificationsPage = () => {
  return (
    <div className="w-full h-full">
      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Recent Notifications 📣</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-gray-200 rounded-lg shadow">
            <p className="text-gray-700">
              Your child has completed the first 5 lessons! 🎉
            </p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow">
            <p className="text-gray-700">
              New lesson plans are available for this week!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
