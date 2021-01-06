---
title: "Under The Wire Century Wargame Write-Up"
---

**[Century](http://underthewire.tech/century/century.htm)** is the easiest wargame offered by the folks over at [UnderTheWire](http://underthewire.tech/). In this introductory game we learn how to do some very basic stuff in powershell, just to get our feet wet in this side of the pond. In terms of difficulty, its most direct comparison would be Bandit (from OtW), but as it is much shorter, it's even easier than that. The hardest challenge here is trying to learn something from the Powershell docs imo.

So, I hope you you enjoy the Write-Up and if you have any doubts don't be afraid to shoot me an e-mail.

### Century 1 -> 2

This level is very simple, as the password is just the build version of powershell running on the server.
To determine the version, you only need to type:

```powershell
    $PSVersionTable
```

The output of that command will be a table sorta like this one :

```powershell
Name                           Value
----                           -----
PSVersion                      5.1.14393.2636
PSEdition                      Desktop
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.14393.2636
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1

```

So in this case the password is _10.0.14393.2636_

### Century 2 -> 3

This level continues to ease us into Powershell, now the new password is the the name of the built-in cmdlet that "emulates" wget and the name of the file that is on the user's desktop.

To get the name of the cmdlet you can just run:

```powershell
PS C:\Users\century2\Documents> Get-Alias wget

CommandType     Name                      Version    Source
-----------     ----                      -------    ------
Alias           wget -> Invoke-WebRequest
```

And you can get the filename just as easy with:

```powershell
PS C:\Users\century2\Documents> ls ..\Desktop


    Directory: C:\Users\century2\Desktop


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        8/30/2018   3:29 AM            693 443


```

So the password is just _invoke-webrequest443_ (lowercase as indicated on the challenge page)

### Century 3 -> 4

Still an easy one, the password is just the number of files on the user's desktop. It's the first time we have to use a Powershell command though. (Obviously all we've used until now are Powershell commands but aliased as their bash names). The solution is just:

```powershell
PS C:\Users\century3\documents> echo ( ls ..\Desktop | Measure-Object).Count
123
```

Onwards to century4 with 123 we go.

### Century 4 -> 5

Now this one has a trick, the password is still just a filename but the file is inside a folder which has spaces, but you can circumvent it using tab-completion, just write the C and then hit tab and it will expand to the full name, as pictured below:

```powershell
PS C:\Users\century4\Documents> ls '..\Desktop\Can You Open Me'


    Directory: C:\Users\century4\Desktop\Can You Open Me


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        8/30/2018   3:29 AM             24 61580


```

### Century 5 -> 6

So this one is a little bit trickier, the password is the short name of the domain where the machine is and the name of the file on the desktop.

Poking around on google there's a really easy command that returns the domain name

```powershell
PS C:\Users\century5\documents> (gwmi Win32_NTDomain).DomainName
underthewire
```

And as we've done a couple of times now, we get the filename like this

```powershell
PS C:\Users\century5\documents> ls ..\Desktop


    Directory: C:\Users\century5\Desktop


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        8/30/2018   3:29 AM             54 3347
```

So, the password would just be _underthewire3347_

### Century 6 -> 7

The solution to this one is the same as Century 3, I was afraid we'd have to learn how to filter files and folders, but appears not, since the solution worked right away for me.

```powershell
PS C:\Users\century6\documents> echo ( ls ..\Desktop | Measure-Object).Count
197
```

### Century 7 -> 8

The password for this level is the content of a file hidden inside the user's folders. All we know is that the password is inside a readme so, if we search for a command that works similar to grep we find that **_Get-ChildItem_** (aliased as ls in the example below) is capable of doing just that. All we have to do is cd into the parent folder of the user and search for a file that _includes_ read and do it _recursively_, so that it searches every folder available.

```powershell
PS C:\Users\century7\documents> cd ..
PS C:\Users\century7> ls -Include *read* -Recurse


    Directory: C:\Users\century7\Downloads


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        8/30/2018   3:29 AM              7 Readme
```

Now that we know where the file is, we just nead to cat (**_Get-Content_** alias) it out

```powershell
PS C:\Users\century7> cat .\Downloads\Readme
7points
```

So the password is just _7points_.

### Century 8 -> 9

The password for this level is the number of unique lines on the file on the file on the desktop. So, using our bash trained minds, we instantly think of `sort | uniq`, so translating to Powershell, we can use **_Get-Unique_**, in bash we'd have to sort it first, due to how uniq works, but here **_Get-Unique_** works by itself. So we can just count the lines left after removing duplicates.

```powershell
PS C:\Users\century8\Desktop> (cat .\unique.txt | Get-Unique).count
696
```

The password is _696_.

### Century 9 -> 10

This level asks for us to retrieve the 161th word of the document on the desktop, which is really simple, we just have to open the file, split it using **_split(" ")_** and then get the desired item, which we can do with brackets, like this:

```powershell
PS C:\Users\century9\Desktop> (cat .\Word_File.txt).split(" ")[160]
pierid
```

### Century 10 -> 11

We need to get the 10th and the 8th word of the description of the windows update service and the name of the file on the desktop, with **_Get-Service_**, you get a list of all the services that machine has, and at the bottom of the list you can see _wuauserv_, the name of the windows update service.

```powershell
PS C:\Users\century10\documents> Get-WMIObject -Class Win32_Service -Filter "Name='wuauserv'" | Select-Object Description | Format-Table -Wrap

Description
-----------
Enables the detection, download, and installation of updates for Windows and
other programs. If this service is disabled, users of this computer will not
be able to use Windows Update or its automatic updating feature, and programs
will not be able to use the Windows Update Agent (WUA) API.


```

So you need to get the service, needing to use a filter to get it, yeah, that threw me for a loop. So then you need to use **_Select-Object_**, and get the Description field, but because and it doesn't fit there you need to use **_Format-Table_**.

Getting the name of the desktop is trivial at this time so, the password is _windowsupdates110_

### Century 11 -> 12

For this one we need to get the name of a file hidden "within the contacts, desktop, documents, downloads, favorites, music,or videos folder in the user's profile", so while it would have been possible to just go to the home folder of the user and recursively check on all folders, because they were so few folders i just went and guessed where it would be, and i finally found it on the downloads folder. To find hidden files you can just tack on **_Force_** on **_Get-Childitem_**.

```powershell
PS C:\Users\century11> cd .\Downloads
PS C:\Users\century11\Downloads> ls -Force


    Directory: C:\Users\century11\Downloads


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
--rh--        8/30/2018   3:34 AM             30 secret_sauce
```

### Century 12 -> 13

The password for this level is the description of the domain's controller computer, plus the name of the file on the desktop, so, to get the description of the domain's controller, we use **_Get-ADDomainController_**.

```powershell
    PS C:\Users\century12\Desktop> Get-ADDomainController


ComputerObjectDN           : CN=UTW,OU=Domain
                             Controllers,DC=underthewire,DC=tech
DefaultPartition           : DC=underthewire,DC=tech
Domain                     : underthewire.tech
Enabled                    : True
Forest                     : underthewire.tech
HostName                   : utw.underthewire.tech
InvocationId               : 09ee1897-2210-4ac9-989d-e19b4241e9c6
IPv4Address                : 192.99.167.156
...
```

The ComputerObjectDN value gives us the domain's controller computer name (CN), so if we use **_Get-ADComputer_**, we can get the information we want.

```powershell
PS C:\Users\century12\Desktop> Get-ADComputer -Filter {Name -eq "UTW"} -Prop Description


Description       : I_Authenticate
DistinguishedName : CN=UTW,OU=Domain Controllers,DC=underthewire,DC=tech
DNSHostName       : utw.underthewire.tech
Enabled           : True
Name              : UTW
ObjectClass       : computer
ObjectGUID        : 5ca56844-bb73-4234-ac85-eed2d0d01a2e
SamAccountName    : UTW$
SID               : S-1-5-21-758131494-606461608-3556270690-1000
UserPrincipalName :

```

The password is _i_authenticate_things_ (the name of the file on the desktop).

### Century 13 -> 14

This one introduces a new cmdlet to use, **_Measure-Object_**. This cmdlet is very useful to know how many words, lines, characters, and seemingly _[almost everything?](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/measure-object?view=powershell-6)_.
To figure out the number of words in this file, we can just pipe it to the cmdlet and then specify that we want the number of words.

```powershell
PS C:\Users\century13\Desktop> cat .\countmywords | Measure-Object -Word

Lines Words Characters Property
----- ----- ---------- --------
        755


```

### Century 14 -> 15

For the last level of this wargame, we simply have to count the number of times the word polo appears inside a file, which is pretty easy to learn how to do with a simple google [search](https://stackoverflow.com/questions/29889495/count-specific-string-in-text-file-using-powershell), so I just adapted the first answer and got what we wanted easily.

```powershell
PS C:\Users\century14\Desktop> ls


    Directory: C:\Users\century14\Desktop


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        8/30/2018  11:24 PM         202900 countpolos

PS C:\Users\century14\Desktop> (cat .\countpolos | Select-String -Pattern "polo" -AllMatches).Matches.Count
158

```

### Century 15

Aaaand... that's all folks. It's the end of this wargame. When I start playing [Cyborg](http://underthewire.tech/cyborg/cyborg.htm) i'll throw a link to the write-up in here. Hope this write-up was able to explain what you didn't understand or was able to teach you a new technique or cmdlet you never used.

Have a good one,

**_Bernardo Sequeira_**
