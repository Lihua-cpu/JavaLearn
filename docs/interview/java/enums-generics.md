---
title: 七、Java 枚举 & 范型
description: 七、Java 枚举 & 范型
category: Java面试资料
tag:
  - 后端面试 
  - Java基础
head:
  - - meta
    - name: keywords
      content: Java基础面试题、Java面试题
---

## [1、什么是枚举类？](#_1、什么是枚举类)
枚举类是一种特殊的类，它用于定义一组固定的常量。枚举类中的每个常量都是该类的一个实例，并且常量之间是唯一的，不能重复。枚举类可以用于表示一组相关的常量，例如表示星期几、月份、颜色等。

以下是一个Java语言中枚举类的示例：

```java
enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

// 使用枚举类
Day today = Day.MONDAY;
if (today == Day.MONDAY) {
    System.out.println("今天是星期一");
}
```

在上面的示例中，`Day`是一个枚举类，它定义了一周中的每一天作为常量。我们可以使用枚举类来表示今天是星期几，并进行比较和其他操作。

## [2、枚举类的常量可以有自己的属性和方法吗？](#_2、枚举类的常量可以有自己的属性和方法吗)
是的，枚举类的常量可以具有自己的属性和方法。每个枚举常量都是枚举类的一个实例，因此可以像普通类一样为常量定义属性和方法。

以下是一个Java语言中枚举类常量具有属性和方法的示例：

```java
enum Day {
    MONDAY("星期一", 1),
    TUESDAY("星期二", 2),
    WEDNESDAY("星期三", 3),
    THURSDAY("星期四", 4),
    FRIDAY("星期五", 5),
    SATURDAY("星期六", 6),
    SUNDAY("星期日", 7);

    private String name;
    private int value;

    Day(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public int getValue() {
        return value;
    }
}

// 使用枚举类常量的属性和方法
Day today = Day.MONDAY;
System.out.println("今天是：" + today.getName());
System.out.println("对应的值是：" + today.getValue());
```

在上面的示例中，`Day`枚举类的每个常量都有一个`name`属性和一个`value`属性，以及相应的构造方法和获取属性值的方法。我们可以使用枚举类常量的属性和方法来获取相关信息。

## [3、枚举类可以实现接口吗？](#_3、枚举类可以实现接口吗)
是的，枚举类可以实现接口。在Java中，枚举类也是一种特殊的类，可以实现接口并重写接口中的方法。

要让枚举类实现接口，只需在枚举类的定义中使用关键字 "implements" 后跟上要实现的接口名称。然后，需要在枚举类中实现接口中定义的所有方法。

下面是一个示例，展示了一个枚举类实现接口的例子：

```java
enum Color implements Printable {
    RED("红色"), GREEN("绿色"), BLUE("蓝色");

    private String name;

    Color(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // 实现接口中的方法
    @Override
    public void print() {
        System.out.println("颜色：" + name);
    }
}

// 定义一个接口
interface Printable {
    void print();
}
```

在上面的示例中，枚举类 `Color` 实现了接口 `Printable`，并重写了接口中的 `print()` 方法。枚举类中的每个常量都是该枚举类的一个实例，可以调用接口中的方法。

枚举类实现接口可以为枚举常量提供更多的行为和功能，并且可以在代码中使用接口类型来引用枚举常量，从而增加代码的灵活性和可扩展性。

## [4、如何遍历枚举类中的常量？](#_4、如何遍历枚举类中的常量)
可以使用枚举类的values()方法获取枚举类的所有常量，并进行遍历。

## [5、枚举类与普通类的区别是什么？](#_5、枚举类与普通类的区别是什么)
枚举类可以确保常量的唯一性且类型安全，可以直接比较和使用，而普通类则需要通过对象来比较和使用

## [6、枚举类在实际开发中的应用场景有哪些？](#_6、枚举类在实际开发中的应用场景有哪些)
枚举类在实际开发中常用于定义一组相关常量、状态机、单例模式等场景

## [7、如何比较两个枚举常量的顺序？](#_7、如何比较两个枚举常量的顺序)
可以使用枚举常量的compareTo()方法来比较两个枚举常量的顺序。

## [8、枚举类可以继承其他类吗？](#_8、枚举类可以继承其他类吗)
Java中的枚举类默认继承自java.lang.Enum类，不支持继承其他类。

## [9、如何扩展枚举类的功能？](#_9、如何扩展枚举类的功能)
可以使用抽象方法，在枚举类的每个常量中实现该抽象方法，以便为每个常量定制不同的行为

## [10、什么是泛型？](#_10、什么是泛型)
泛型（Generics）是Java中的一个重要特性，它提供了在编译时期对类型进行参数化的能力。通过使用泛型，可以在编写类、接口和方法时指定类型参数，从而增加代码的灵活性和安全性。

泛型的主要目的是实现类型的参数化，使得代码能够适用于多种不同类型的数据，而不需要为每种类型都编写独立的代码。使用泛型可以避免类型转换错误和运行时异常，并提高代码的可读性和重用性。

在使用泛型时，需要使用尖括号（<>）来指定类型参数。常见的泛型类型参数命名约定有：

+ E：表示元素（Element），常用于集合类中
+ T：表示类型（Type）
+ K：表示键（Key）
+ V：表示值（Value）

下面是一个使用泛型的示例，展示了一个泛型类的定义和使用：

```java
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

// 使用泛型类
Box<Integer> box = new Box<>();
box.setValue(10);
int value = box.getValue(); // 不需要进行类型转换，直接获取到 Integer 类型的值
```

在上面的示例中，`Box` 类是一个泛型类，通过使用类型参数 `T`，可以在实例化 `Box` 对象时指定具体的类型。在使用 `Box` 对象时，不需要进行类型转换，可以直接获取到指定类型的值。

除了泛型类，还有泛型接口和泛型方法。泛型接口和泛型方法的使用方式类似，都是在定义时指定类型参数，并在使用时指定具体的类型。

## [11、如何在泛型中使用继承关系？](#_11、如何在泛型中使用继承关系)
在泛型中使用继承关系可以通过使用泛型的上界（bounded type）来实现。泛型的上界指定了泛型参数必须是指定类型或其子类。

下面是一个示例，展示了如何在泛型中使用继承关系：

```java
class Animal {
    public void eat() {
        System.out.println("Animal is eating.");
    }
}

class Dog extends Animal {
    public void bark() {
        System.out.println("Dog is barking.");
    }
}

class Cat extends Animal {
    public void meow() {
        System.out.println("Cat is meowing.");
    }
}

class Box<T extends Animal> {
    private T animal;

    public void setAnimal(T animal) {
        this.animal = animal;
    }

    public T getAnimal() {
        return animal;
    }
}

public class Main {
    public static void main(String[] args) {
        Box<Dog> dogBox = new Box<>();
        Dog dog = new Dog();
        dogBox.setAnimal(dog);

        Box<Cat> catBox = new Box<>();
        Cat cat = new Cat();
        catBox.setAnimal(cat);
        
        Dog dogFromBox = dogBox.getAnimal();
        dogFromBox.eat();
        dogFromBox.bark();

        Cat catFromBox = catBox.getAnimal();
        catFromBox.eat();
        catFromBox.meow();
    }
}
```

在上面的示例中，`Box` 类使用了泛型参数 `T`，并通过 `T extends Animal` 指定了泛型的上界为 `Animal` 类型或其子类。这样，我们可以在 `Box` 类中存储 `Animal` 类型的对象或其子类对象。

在 `main` 方法中，我们创建了一个 `Box<Dog>` 对象和一个 `Box<Cat>` 对象，并将 `Dog` 对象和 `Cat` 对象分别存储到这两个 `Box` 对象中。然后，我们可以通过 `getAnimal` 方法获取到存储在 `Box` 对象中的动物对象，并调用其方法。

通过使用泛型的上界，我们可以限制泛型参数的类型范围，从而在泛型中使用继承关系。

## [12、泛型中的自动装箱和拆箱如何发生？](#_12、泛型中的自动装箱和拆箱如何发生)
在泛型中，自动装箱和拆箱是指将基本类型数据自动转换为对应的包装类型，以及将包装类型自动转换为对应的基本类型。

当我们使用泛型时，如果泛型类型参数是包装类型（如Integer、Double等），而我们又传入了对应的基本类型数据（如int、double等），编译器会自动进行装箱操作，将基本类型数据包装成对应的包装类型对象。例如：

```java
List<Integer> list = new ArrayList<>();
list.add(10); // 自动装箱，将int类型的10装箱成Integer对象
```

类似地，当我们从泛型容器中获取元素时，如果泛型类型参数是包装类型，而我们使用了对应的基本类型变量来接收数据，编译器会自动进行拆箱操作，将包装类型对象转换为基本类型数据。例如：

```java
List<Integer> list = new ArrayList<>();
list.add(10);
int value = list.get(0); // 自动拆箱，将Integer对象转换为int类型
```

自动装箱和拆箱的操作是由编译器在编译时自动完成的，使得我们在使用泛型时可以方便地处理基本类型数据。这样，我们可以像处理普通对象一样处理基本类型数据，提高了代码的可读性和简洁性。

## [13、在泛型中如何进行类型转换？](#_13、在泛型中如何进行类型转换)
在泛型中进行类型转换有两种常见的方式：强制类型转换和通配符。

1. 强制类型转换：在某些情况下，我们可能需要将泛型对象转换为特定的类型。可以使用强制类型转换来实现。例如：

```java
List<Object> list = new ArrayList<>();
list.add("Hello");
String str = (String) list.get(0); // 强制类型转换为String类型
```

需要注意的是，在进行强制类型转换时，要确保转换是安全的，即被转换的对象的实际类型必须与目标类型兼容，否则会抛出ClassCastException异常。

1. 通配符：如果我们不确定泛型参数的具体类型，或者需要在方法中处理不同类型的泛型参数，可以使用通配符来进行类型转换。通配符使用问号（?）表示，有两种常见的通配符类型：上界通配符和无界通配符。
+ 上界通配符（Upper Bounded Wildcard）使用 extends 关键字。它表示泛型参数必须是指定类型或其子类型。例如：

```java
public void processList(List<? extends Number> list) {
    // 在这里可以安全地使用Number及其子类的方法
}
```

+ 无界通配符（Unbounded Wildcard）使用问号（?）表示，表示泛型参数可以是任意类型。例如：

```java
public void processList(List<?> list) {
    // 在这里可以安全地使用Object类的方法
}
```

使用通配符可以在不确定具体类型的情况下，对泛型参数进行处理，提高代码的灵活性和可复用性。

需要注意的是，通配符只能用于读取数据，不能用于写入数据。也就是说，在使用通配符作为方法参数时，我们只能从中获取数据，不能向其中添加数据。如果需要同时读取和写入数据，可以使用有界通配符（使用 super 关键字）或者使用泛型参数来实现。
