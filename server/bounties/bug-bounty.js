module.exports = function(mongoose) {
  return mongoose.model('BugBounty', {
    title: String,
    description: String,
    authorId: Number,
    postedOn: Date,
    postedBy: String,
    assignedTo: String,
    status: String,
    gitReference: {
      gitHubIssueUrl: String,
    },
  });
};
