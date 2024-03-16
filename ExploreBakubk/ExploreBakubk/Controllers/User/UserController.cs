using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using ExploreBakubk.Database;
using ExploreBakubk.Database.DomainModels;
using ExploreBakubk.ViewModels.Auth;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ExploreBakubk.Controllers.User
{
    public class UserController : Controller
    {
        private readonly ExplrDbContext.ExplrDbContext _context;

        public UserController(ExplrDbContext.ExplrDbContext context)
        {
            _context = context;
        }

        #region Login
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            var user = _explrDbContext.Users
                .FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);

            if (user == null)
            {
                ModelState.AddModelError("Email", "Invalid email or password");
                return View();
            }

            var claims = new List<Claim>
            {
                new Claim("Id", user.Id.ToString())
            };

            if (user.IsAdmin)
            {
                claims.Add(new Claim(ClaimTypes.Role, "admin"));
            }

            var claimsIdentity = new ClaimsIdentity(claims, "Cookies");
            var claimsPrincipal = new ClaimsPrincipal(claimsIdentity);

            await HttpContext.SignInAsync("Cookies", claimsPrincipal);

            return RedirectToAction("Index", "Home");
        }
        #endregion

        #region Register
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            if (_explrDbContext.Users.Any(u => u.Email == model.Email))
            {
                ModelState.AddModelError("Email", "This email is already taken");
                return View();
            }

            var user = new User
            {
                Name = model.Name,
                LastName = model.LastName,
                Email = model.Email,
                Password = model.Password
            };

            _explrDbContext.Users.Add(user);
            _explrDbContext.SaveChanges();

            return RedirectToAction("Index", "Home");
        }
        #endregion

        #region Logout
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync("Cookies");
            return RedirectToAction(nameof(Login));
        }
        #endregion
    }
}
