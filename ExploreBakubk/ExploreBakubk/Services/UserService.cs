using Microsoft.AspNetCore.Http;
using ExploreBakubk.Database;
using ExploreBakubk.Database.DomainModels;
using ExploreBakubk.Services.Abstract;
using System;
using System.Linq;
using System.Security.Claims;
using ExplrDbContext;

namespace ExploreBakubk.Services.Concretes
{
    public class UserService : IUserService
    {
        private readonly ExplrDbContext _explrDbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private User _currentUser = null;

        public User CurrentUser
        {
            get
            {
                return _currentUser ??= GetCurrentLoggedUser();
            }
        }

        public bool IsAuthenticated
        {
            get
            {
                return _httpContextAccessor.HttpContext.User.Identity.IsAuthenticated;
            }
        }

        public UserService(
            ExplrDbContext explrDbContext,
            IHttpContextAccessor httpContextAccessor)
        {
            _explrDbContext = explrDbContext;
            _httpContextAccessor = httpContextAccessor;
        }

        private User GetCurrentLoggedUser()
        {
            var currentUserId = _httpContextAccessor.HttpContext.User
                .FindFirst(c => c.Type == "Id").Value;
            return _explrDbContext.Users.Single(u => u.Id == Convert.ToInt32(currentUserId));
        }

        public string GetFullName(User user)
        {
            return user.Name + " " + user.LastName;
        }

        public string GetCurrentUserFullName()
        {
            return GetFullName(CurrentUser);
        }
    }
}
