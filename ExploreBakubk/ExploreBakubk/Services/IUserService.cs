using ExploreBakubk.Database.DomainModels;
using ExplrDbContext;

namespace ExploreBakubk.Services.Abstract
{
    public interface IUserService
    {
        User CurrentUser { get; }
        bool IsAuthenticated { get; }
        string GetFullName(User user);
        string GetCurrentUserFullName();
    }
}
