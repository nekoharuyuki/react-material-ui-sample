import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  AccountCircle as AccountCircleIcon,
  Assignment as AssignmentIcon,
  Photo as PhotoIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  AdminPanelSettings as AdminPanelSettingsIcon
} from "@mui/icons-material";

import {
  NavigationItem,
  NavigationSingleItem,
  NavigationGroupItem
} from "../NavigationList";

const createNavigationSingleItem = (item: NavigationSingleItem) => item;
const createNavigationGroupItem = (item: NavigationGroupItem) => item;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  createNavigationSingleItem({
    icon: HomeIcon,
    title: "管理画面トップ",
    href: "/"
  }),
  createNavigationSingleItem({
    icon: DashboardIcon,
    title: "ダッシュボード",
    href: "/Dashboard"
  }),
  createNavigationGroupItem({
    icon: AccountCircleIcon,
    title: "ユーザー情報",
    subs: [
      createNavigationSingleItem({
        title: "ユーザー情報 一覧",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "ゲーム内通貨設定",
        href: "/images"
      }),
      createNavigationSingleItem({
        title: "お知らせ・ギフト設定",
        href: "/images"
      })
    ]
  }),
  createNavigationGroupItem({
    icon: AssignmentIcon,
    title: "マスタデータ",
    subs: [
      createNavigationSingleItem({
        title: "クエスト",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "ショップ",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "ガチャ",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "キャラクター",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "アイテム",
        href: "/images/new"
      })
    ]
  }),
  createNavigationGroupItem({
    icon: PhotoIcon,
    title: "画像データ",
    subs: [
      createNavigationSingleItem({
        title: "新規作成",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "画像一覧",
        href: "/images"
      })
    ]
  }),
  createNavigationGroupItem({
    icon: BarChartIcon,
    title: "データ分析",
    subs: [
      createNavigationSingleItem({
        title: "ユーザー分析",
        href: "/images/new"
      }),
      createNavigationSingleItem({
        title: "課金分析",
        href: "/images"
      }),
      createNavigationGroupItem({
        title: "コンテンツ分析",
        subs: [
          createNavigationSingleItem({
            title: "チュートリアル",
            href: "/settings/notification-desktop"
          }),
          createNavigationSingleItem({
            title: "クエスト",
            href: "/settings/notification-email"
          }),
          createNavigationSingleItem({
            title: "キャラクター",
            href: "/settings/notification-desktop"
          }),
        ]
      })
    ]
  }),
  createNavigationGroupItem({
    icon: SettingsIcon,
    title: "設定",
    subs: [
      createNavigationSingleItem({
        title: "プラン",
        href: "/settings/plan"
      }),
      createNavigationGroupItem({
        title: "アカウント",
        subs: [
          createNavigationSingleItem({
            title: "メアド変更",
            href: "/settings/email"
          }),
          createNavigationSingleItem({
            title: "パスワード変更",
            href: "/settings/password"
          })
        ]
      }),
      createNavigationGroupItem({
        title: "通知",
        subs: [
          createNavigationSingleItem({
            title: "デスクトップ",
            href: "/settings/notification-desktop"
          }),
          createNavigationSingleItem({
            title: "メール",
            href: "/settings/notification-email"
          })
        ]
      }),
    ]
  }),
  createNavigationGroupItem({
    icon: AdminPanelSettingsIcon,
    title: "管理者設定",
    subs: [
      createNavigationSingleItem({
        title: "アカウント管理",
        href: "/Admin"
      }),
      createNavigationSingleItem({
        title: "お知らせ設定",
        href: "/settings/notification-email"
      })
    ]
  })
];
