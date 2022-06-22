# Параграф 1: Дампы, vendor, proprietary-files.txt и обновление библиотек

Здесь мы начнем говорить о том, что такое дампы, где их взять и как взаимосвязаны vendor и proprietary-files.txt. Уточню, что здесь будет речь не о разделе vendor, а о vendor tree, для краткости я буду писать просто vendor.

Начнем с конца.

**Vendor и proprietary-files.txt**

В деревьях вы могли видеть файлик **proprietary-files.txt**. Если вы его открывали, то видели, что это по факту список того, что лежит в vendor'е. Также подобных файлов может быть несколько. В деревьях устройств на базе процессоров Qualcomm Snapdragon часто можно было встретить **proprietary-files-qc.txt** - это список файлов для common vendor. К примеру, у mido и tissot был common vendor и в их деревьях можно было встретить proprietary-files-qc.txt.

Здесь я приведу синтаксис данных списков. Позже вы поймете зачем и почему.

Синтаксис строки выглядит так

```
[-]source[:destination][|sha1sum]
```

source - из какого места был взят блоб.

destination - где лежит блоб в vendor'е

sha1sum - sha1 хеш-сумма

"-"  - блоб должен быть модулем, так как требуется что-то собрать с использованием этого блоба, [пример](https://github.com/LineageOS/android_device_leeco_s2/blob/1c12856e5c8d70e756aa48f91d1ad9066ddd9fd0/audio_amplifier/Android.mk#L26)

[Референс](https://wiki.lineageos.org/proprietary_blobs)

TODO: дописать, щас час ночи 23-го июня, я хочу спать...