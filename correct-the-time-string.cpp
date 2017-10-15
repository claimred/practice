//Task codewars id: 57873ab5e55533a2890000c7
/* Task codewars description: A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time-Format is european. So from "00:00:00" to "23:59:59".
<br>
<br>
Some examples:

"09:10:01" -> "09:10:01"<br>
"11:70:10" -> "12:10:10"<br>
"19:99:99" -> "20:40:39"<br>
"24:01:01" -> "00:01:01"<br>

If the input-string is null or empty return exactly this value! (empty string for C++)<br/>
If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-) 

I have created other katas. Have a look if you like coding and challenges.*/

#include <string>
#include <algorithm>
#include <iostream>
#include <sstream>
#include <cctype>

std::vector<std::string> split( std::string str, char c )
{
   std::vector<std::string> res;

   std::string tmp = "";

   bool found = false;

   for (int i = 0; i < str.size(); i++)
   {
      if (str[i] == c)
      {
         found = true;

         if (!tmp.empty())
            res.push_back(tmp);
         tmp.clear();
      }
      else
         tmp.push_back(str[i]);
   }

   if (found)
      res.push_back(tmp);

   return res;
}

std::string correct(std::string timeString)
{ 
   std::vector<std::string> spl = split(timeString, ':');

   if (spl.size() != 3)
      return "";

   for (int i = 0; i < timeString.size(); i++)
   {
      if (!std::isdigit(timeString[i]) && timeString[i] != ':')
         return "";
   }

   int hh = std::atoi(spl[0].c_str()), 
       mm = std::atoi(spl[1].c_str()), 
       ss = std::atoi(spl[2].c_str());
   int tmp = 0;

   if (ss > 59)
   {
      tmp = ss - 60;
      ss -= 60;
      mm++;
   }

   if (mm > 59)
   {
      tmp = mm - 60;
      mm -= 60;
      hh++;
   }

    if (hh > 23)
   {
      hh = hh % 24;
   }


   std::string res;

   spl[0] = std::to_string(hh);
   spl[1] = std::to_string(mm);
   spl[2] = std::to_string(ss);

   if (hh < 10)
      res += "0";

   res += spl[0];
   res += ":";

   if (mm < 10)
      res += "0";

   res += spl[1];
   res += ":";

   if (ss < 10)
      res += "0";

   res += spl[2];
   


   return res;
}