# Параграф 1: ошибки сборки (SELinux, нехватка пакетов, ресурсов и тд)



## Cписок частых ошибок:

1. [libncurses5](#libncurses5)
2. [UnicodeDecodeError](#unicodedecodeerror-ascii-codec-cant-decode-byte-0xd0)











# libncurses5

`error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory`

> Фикс:
>
> - Ubuntu
>
>   ```bash
>   sudo apt-get install libncurses5
>   ```
>
> - Arch
>
>   ```bash
>   yay ncurses5-compat-libs
>   ```



# UnicodeDecodeError: 'ascii' codec can't decode byte 0xd0

![image-20210218203603071](images/1.png)

> Фикс:
>
> ​	Убрать русские буквы в пути. Не должно быть по типу /home/coolgirl/прошивочка/...
