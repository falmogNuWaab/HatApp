using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;


namespace HatApp
{
    public class DAL
    {

        public List<Hats> AllHats()
        {
            string sql = $"select * from hats";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Hats> h = connect.Query<Hats>(sql).ToList();
                connect.Close();

                return h;
            };

        }

        public List<Users> AllUser()
        {
            string sql = $"select * from users";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Users> u = connect.Query<Users>(sql).ToList();
                connect.Close();
                return u;
            };
        }
        public int GenerateRandomID()
        {
            Random no = new Random();
            string sql = "select * from hats";
            List<Hats> h = new List<Hats>();
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                h = connect.Query<Hats>(sql).ToList();
                connect.Close();               
            };
            return no.Next(0, h.Count);
        }
        public Users GetUserByID(int id)
        {
            int recommendId = GenerateRandomID();
            string rsql = $"select * from hats where id={recommendId}";
            string usql = $"select * from users where id={id}";
            string mhsql = $"select * from myhats where userid={id}";
            string tmhsql = $"select * from monthlyhats where userid={id}";
            Users u = new Users();
            Hats ofTheDay = new Hats();
            List<MyHats> mhl = new List<MyHats>();
            List<MonthlyHats> tmhl = new List<MonthlyHats>();
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                u = connect.Query<Users>(usql).First();
                ofTheDay = connect.Query<Hats>(rsql).First();
                mhl = connect.Query<MyHats>(mhsql).ToList();
                tmhl = connect.Query<MonthlyHats>(tmhsql).ToList();
                connect.Close();
            }
            u.HatOfTheDay = ofTheDay;
            u.MyCollection = AssociateHats(mhl);
            u.Worn30 = AssociateHats(tmhl);
            return u;
        }
        public List<Hats> AssociateHats(List<MyHats> collection)
        {
            List<Hats> MyCollection = new List<Hats>();
            foreach(MyHats mh in collection)
            {
                Hats h = GetHat(mh.hatid);
                MyCollection.Add(h);
            }
            return MyCollection;
        }

        public List<Hats> AssociateHats(List<MonthlyHats> collection)
        {
            List<Hats> MyCollection = new List<Hats>();
            foreach (MonthlyHats mh in collection)
            {
                Hats h = GetHat(mh.HatId);
                MyCollection.Add(h);
            }
            return MyCollection;
        }

        public void DeleteUser(int id)
        {
            string sql = $"delete from users where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Users>(sql);
                connect.Close();
            }
        }

        public List<Users> GetUser(int id)
        {
            string sql = $"select * from users where id ={id}";       

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Users> u = connect.Query<Users>(sql).ToList();
                connect.Close();

                return u;
            };

        }


        public List<Hats> GetHats(int id)
        {
            string sql = $"select * from hats where id ={id}";          

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Hats> h = connect.Query<Hats>(sql).ToList();
                connect.Close();

                return h;
            };

        }

        public Hats GetHat(int id)
        {
            string sql = $"select * from hats where id ={id}";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                Hats h = connect.Query<Hats>(sql).ToList().First();
                connect.Close();

                return h;
            };
        }
        public void DeleteHat(int id)
        {
            string sql = $"delete from hat where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Hats>(sql);
                connect.Close();
            }
        }

        public void UpdateUser(Users u)
        {
            string sql = $"update users set firstname='{u.FirstName}', lastname='{u.LastName}' where id ={u.Id} ";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Hats>(sql);
                connect.Close();
            }
        }

        public void UpdateHat(Hats h)
        {
            string sql = $"update hats set type='{h.Type}', material='{h.Material}', color='{h.Color}', images='{h.Images}', facts='{h.Facts}' where id ={h.Id} ";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Hats>(sql);
                connect.Close();
            }
        }


        public List<MyHats> GetMyHat(int id)
        {
            string sql = $"select * from myhats where id ={id}";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<MyHats> h = connect.Query<MyHats>(sql).ToList();
                connect.Close();

                return h;
            };

        }

        public List<MyHats> GetAllMyHats()
        {
            string sql = $"select * from myhats";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<MyHats> h = connect.Query<MyHats>(sql).ToList();
                connect.Close();

                return h;
            };

        }
        public void DeleteMyHat(int id)
        {
            string sql = $"delete from myhats where hatid ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<MyHats>(sql);
                connect.Close();
            }
        }
        public void AddMyHats(int userid, int hatid)
        {
            string sql = $"insert into myhats values (0,{userid},{hatid})";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<MyHats>(sql);
                connect.Close();

              
            };

        }

        public List<MonthlyHats> GetMonthlyHat(int id)
        {
            string sql = $"select * from monthlyhats where userid ={id}";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<MonthlyHats> h = connect.Query<MonthlyHats>(sql).ToList();
                connect.Close();

                return h;
            };

        }

        public List<MyHats> GetMyHatByUserID(int id)
        {
            string sql = $"select * from myhats where userid ={id}";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<MyHats> h = connect.Query<MyHats>(sql).ToList();
                connect.Close();

                return h;
            };

        }

        public List<MonthlyHats> GetAllMonthlyHats()
        {
            string sql = $"select * from monthlyhats";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<MonthlyHats> h = connect.Query<MonthlyHats>(sql).ToList();
                connect.Close();

                return h;
            };

        }

        public void CreateMonthlyHat(int u, int h, string d)
        {
            string sql = $"insert into monthlyhats values (0,{u},{h},'{d}')";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<MonthlyHats>(sql);
                connect.Close();

            };

        }


    }
}
