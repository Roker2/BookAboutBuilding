# Параграф 1: ошибки сборки (SELinux, нехватка пакетов, ресурсов и тд)



## Cписок частых ошибок:

1. [ccache](#ccache)

2. [libncurses5](#libncurses5)

3. [UnicodeDecodeError](#unicodedecodeerror-ascii-codec-cant-decode-byte-0xd0)



# ccache

`error: Failed to create directory /home/user/.ccache/tmp: Read -only file system`

> Фикс:
>
> 1. Создаём папку по пути /mnt/ccache командой:
> 	```bash
> 	sudo mkdir /mnt/ccache
> 	```
> 2. Монтируем cache:
> 	```bash
> 	sudo mount --bind /home/username/.cache /mnt/ccache
> 	```
> 	*Вместо "username" вписываете своего юзера! И не ошибитесь в пути, у вас он может быть слегка другим.*
>
> 3. После монтирования прописываем команду для сжатия нашего кэша (это опционально, если вы хотите впихнуть больше в мелкий объём как я, то пишем):
> 	```bash
> 	ccache -o compression=true
> 	```
> 4. Делаем стандартный экспорт и т.д.:
>    ```bash
>    export USE_CCACHE=1
>    ```
>    ```bash
>    export CCACHE_EXEC=/usr/bin/ccache
>    ```
>    ```bash
>    export CCACHE_DIR=/mnt/ccache
>    ```
> 5. Устанавливаем размер нашего кэша:
> 	```bash
> 	ccache -M 15G -F 0
> 	```
> 	*15G - Размер кэша в ГБ*
> 			
> 	5.1. **Такое решение работает до первой перезагрузки.** Для повторного исправления (после каждого ребута), просто прописываете команду монтирования:
>	```bash
> 	sudo mount --bind /home/username/.cache /mnt/ccache
> 	```
> 6. Либо добавляем наш ccache в fstab:
> 	```bash
> 	sudo nano /etc/fstab
> 	```
>	6.1. И добавляем строку:
> 	   `/home/username/ccache /mnt/ccache none defaults,bind,users,noauto 0 0`
>
> 8. После чего редактируем файл профиля:
> 	```bash
>	nano ~/.profile
> 	```
> 	7.1.  Добавив строку:
> 	   ```bash
> 	   mount /mnt/ccache
> 	   ```



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
